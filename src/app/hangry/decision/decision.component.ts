import { Component, Input, OnInit } from '@angular/core';
import { Action, Decision } from '../models';

@Component({
  selector: 'app-decision',
  templateUrl: './decision.component.html',
  styleUrls: ['./decision.component.scss']
})
export class DecisionComponent implements OnInit {
  @Input() decision: Decision;
  next: Decision;

  constructor() { }

  ngOnInit(): void {
  }

  perform(action: Action) {
    this.next = undefined;
    if (action.type === 'decision') {
      this.next = action.value as Decision;
    }
  }

}
