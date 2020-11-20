import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DecisionTreeService } from './services';
import { Decision } from './models';

@Component({
  selector: 'app-hangry',
  templateUrl: './hangry.component.html',
  styleUrls: ['./hangry.component.scss']
})
export class HangryComponent implements OnInit {
  decision$: Observable<Decision>;

  constructor(
    private decisionTree: DecisionTreeService
  ) { }

  ngOnInit(): void {
    this.decision$ = this.decisionTree.tree$;
  }
}
