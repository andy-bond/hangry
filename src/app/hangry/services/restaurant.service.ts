import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Restaurant } from '../models';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private restaurants = new BehaviorSubject<Restaurant[]>(undefined);
  get restaurants$(): Observable<Restaurant[]> {
    if (this.restaurants.value === undefined) {
      this.http.get<Restaurant[]>('assets/content/restaurants.jsonc').subscribe(result => {
        this.restaurants.next(result);
      });
    }
    return this.restaurants.asObservable();
  }

  constructor(
    private http: HttpClient
  ) { }
}
