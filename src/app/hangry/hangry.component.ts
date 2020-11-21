import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { fade } from '@core/helpers';
import { DecisionService, MealService, RestaurantService } from './services';
import { Action, Decision, Meal, Restaurant } from './models';
import { DecisionComponent } from './decision/decision.component';

@Component({
  selector: 'app-hangry',
  templateUrl: './hangry.component.html',
  styleUrls: ['./hangry.component.scss'],
  animations: [fade]
})
export class HangryComponent implements OnInit, AfterViewInit, OnDestroy {
  private destroy$ = new Subject<void>();
  @ViewChildren(DecisionComponent, { read: ElementRef }) elements: QueryList<ElementRef>;

  decisions$: Observable<Decision[]>;
  meals$: Observable<Meal[]>;
  restaurants$: Observable<Restaurant[]>;

  meals = false;
  restaurants = false;

  constructor(
    private decision: DecisionService,
    private meal: MealService,
    private restaurant: RestaurantService
  ) { }

  ngOnInit(): void {
    this.decisions$ = this.decision.decisions$;
    this.meals$ = this.meal.meals$;
    this.restaurants$ = this.restaurant.restaurants$;
  }

  ngAfterViewInit() {
    this.elements?.changes.pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      if (this.elements?.last) {
        const element = this.elements.last.nativeElement;
        setTimeout(() => element.scrollIntoView({ block: 'center', behavior: 'smooth' }), 500);
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  perform(action: Action) {
    console.log(action);
    if (action.type === 'meal-options') {
      this.restaurants = false;
      this.meals = true;
    } else if (action.type === 'restaurant-options') {
      this.meals = false;
      this.restaurants = true;
    } else {
      console.log('both false');
      this.meals = false;
      this.restaurants = false;
    }
  }
}
