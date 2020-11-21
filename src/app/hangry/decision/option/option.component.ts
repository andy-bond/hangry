import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Option } from '../../models';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent {
  @Input() option: Option;
  @Input() active = false;
  @Output() selected = new EventEmitter<void>();

  click() {
    this.selected.emit();
  }
}
