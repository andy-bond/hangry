import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { fade } from '@core/helpers';
import { DecisionService, MealService, RestaurantService } from './services';
import { Action, Decision, Meal, Restaurant } from './models';
import { DecisionComponent } from './decision/decision.component';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-hangry',
  templateUrl: './hangry.component.html',
  styleUrls: ['./hangry.component.scss'],
  animations: [fade]
})
export class HangryComponent implements OnInit, AfterViewInit, OnDestroy {
  private destroy$ = new Subject<void>();
  @ViewChildren(DecisionComponent, { read: ElementRef }) decisionElements: QueryList<ElementRef>;
  @ViewChildren(MatCard, { read: ElementRef }) extraElements: QueryList<ElementRef>;

  decisions$: Observable<Decision[]>;

  randomMeal$ = new BehaviorSubject<boolean>(false);
  mealCategory$ = new BehaviorSubject<string>(undefined);
  meals$: Observable<Meal[]>;
  highlightedMeal: Meal;

  randomRestaurant$ = new BehaviorSubject<boolean>(false);
  restaurantCategory$ = new BehaviorSubject<string>(undefined);
  restaurants$: Observable<Restaurant[]>;
  highlightedRestaurant: Restaurant;

  meals = false;
  restaurants = false;

  constructor(
    private decision: DecisionService,
    private meal: MealService,
    private restaurant: RestaurantService
  ) { }

  ngOnInit(): void {
    this.decisions$ = this.decision.decisions$;
    this.meals$ = combineLatest([
      this.meal.meals$,
      this.mealCategory$,
      this.randomMeal$
    ]).pipe(
      map(([meals, filter, random]) => {
        const result = filter ? meals.filter(m => m.categories.includes(filter)) : meals;
        this.highlightedMeal = random ? result[Math.floor(Math.random() * result.length)] : undefined;
        return result;
      })
    );
    this.restaurants$ = combineLatest([
      this.restaurant.restaurants$,
      this.restaurantCategory$,
      this.randomRestaurant$
    ]).pipe(
      map(([restaurants, filter, random]) => {
        const result = filter ? restaurants.filter(r => r.categories.includes(filter)) : restaurants;
        this.highlightedRestaurant = random ? result[Math.floor(Math.random() * result.length)] : undefined;
        return result;
      })
    );
  }

  ngAfterViewInit() {
    this.decisionElements?.changes.pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      if (this.decisionElements?.last) {
        const element = this.decisionElements.last.nativeElement;
        setTimeout(() => element.scrollIntoView({ block: 'center', behavior: 'smooth' }), 0);
      }
    });
    this.extraElements?.changes.pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      if (this.extraElements?.last) {
        const element = this.extraElements.last.nativeElement;
        setTimeout(() => element.scrollIntoView({ block: 'center', behavior: 'smooth' }), 0);
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  perform(action: Action) {
    if (action.type === 'meal-options') {
      this.restaurants = false;
      this.restaurantCategory$.next(undefined);
      this.meals = true;
      this.mealCategory$.next(action.value);
      this.randomMeal$.next(false);
    } else if (action.type === 'restaurant-options') {
      this.meals = false;
      this.mealCategory$.next(undefined);
      this.randomMeal$.next(false);
      this.restaurants = true;
      if (action.value !== 'random') {
        this.restaurantCategory$.next(action.value);
        this.randomRestaurant$.next(false);
      } else {
        this.restaurantCategory$.next(undefined);
        this.randomRestaurant$.next(true);
      }
    } else {
      console.log('both false');
      this.meals = false;
      this.mealCategory$.next(undefined);
      this.randomMeal$.next(false);
      this.restaurants = false;
      this.restaurantCategory$.next(undefined);
      this.randomRestaurant$.next(false);
    }
  }

  random(type: string) {
    if (type === 'meal') {
      this.randomMeal$.next(true);
    } else if (type === 'restaurant') {
      this.randomRestaurant$.next(true);
    }
  }
}
