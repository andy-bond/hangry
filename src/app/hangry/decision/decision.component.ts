import { Component, EventEmitter, Input, Output } from '@angular/core';
import { fade } from '@core/helpers';
import { DecisionService } from '../services';
import { Action, Decision, Option } from '../models';

@Component({
  selector: 'app-decision',
  templateUrl: './decision.component.html',
  styleUrls: ['./decision.component.scss'],
  animations: [fade]
})
export class DecisionComponent {
  @Input() decision: Decision;
  @Input() index: number;
  @Output() special = new EventEmitter<Action>();
  selected: Option;
  broke = false;

  constructor(
    private decisionService: DecisionService
  ) { }

  select(option: Option) {
    if (this.selected !== option) {
      this.selected = option;
      const action = this.selected.action;
      this.decisionService.pop(this.index);
      switch (action.type) {
        case 'decision':
          this.decisionService.push(action.value);
          break;
        case 'broke':
          this.broke = true;
          break;
      }
      this.special.emit(action);
    }
  }
}
