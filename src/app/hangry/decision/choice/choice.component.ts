import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Action, Choice } from '../../models';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss']
})
export class ChoiceComponent implements OnInit {
  @Input() choice: Choice;
  @Output() selected = new EventEmitter<Action>();

  constructor() { }

  ngOnInit(): void {
  }

  click() {
    this.selected.emit(this.choice.action);
  }
}
