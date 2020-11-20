import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DecisionTreeService {
  private tree = new BehaviorSubject<any>(undefined);
  get tree$(): Observable<any> {
    if (this.tree.value === undefined) {
      this.http.get<any>('assets/content/decision-tree.jsonc').subscribe(result => this.tree.next(result));
    }
    return this.tree.asObservable();
  }

  constructor(
    private http: HttpClient
  ) { }
}
