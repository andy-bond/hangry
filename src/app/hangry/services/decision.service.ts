import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Decision } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DecisionService {
  private cache = new BehaviorSubject<Decision[]>(undefined);
  private decisions = new BehaviorSubject<Decision[]>(undefined);
  get decisions$(): Observable<Decision[]> {
    if (this.cache.value === undefined) {
      this.http.get<Decision[]>('assets/content/decisions.jsonc').subscribe(result => {
        const first = result[0];
        this.cache.next(result);
        this.decisions.next([first]);
      });
    }
    return this.decisions.asObservable();
  }

  constructor(
    private http: HttpClient
  ) { }

  push(key: string) {
    const decision = this.cache.value.find(i => i.id === key);
    const present = this.decisions.value.findIndex(i => i.id === key) !== -1;
    if (decision && !present) {
      this.decisions.next([...this.decisions.value, decision]);
    }
  }

  pop(index: number) {
    if (this.decisions.value) {
      const count = this.decisions.value.length - index - 1;
      let current = 0;
      while (this.decisions.value.length > 1 && current < count) {
        const popped = this.decisions.value.pop();
        console.log(`Removing`, popped);
        current++;
      }
    }
  }
}
