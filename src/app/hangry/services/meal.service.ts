import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Meal } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  private meals = new BehaviorSubject<Meal[]>(undefined);
  get meals$(): Observable<Meal[]> {
    if (this.meals.value === undefined) {
      this.http.get<Meal[]>('assets/content/meals.jsonc').subscribe(result => {
        this.meals.next(result);
      });
    }
    return this.meals.asObservable();
  }

  constructor(
    private http: HttpClient
  ) { }
}
