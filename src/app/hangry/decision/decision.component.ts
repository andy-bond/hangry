import { Component, Input, OnInit } from '@angular/core';
import { fade } from '@core/helpers';
import { Action, Choice, Decision } from '../models';

@Component({
  selector: 'app-decision',
  templateUrl: './decision.component.html',
  styleUrls: ['./decision.component.scss'],
  animations: [fade]
})
export class DecisionComponent implements OnInit {
  @Input() decision: Decision;
  next: Decision;

  constructor() { }

  ngOnInit(): void {
  }

  perform(choice: Choice, action: Action) {
    this.next = undefined;
    if (this.decision.choices?.length > 0) {
      this.decision.choices.forEach(c => {
        if (c !== choice) {
          c.selected = false;
        } else {
          c.selected = true;
        }
      });
    }
    if (action.type === 'decision') {
      this.next = action.value as Decision;
    }
  }

}
