import { Component, HostBinding, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { ThemeService } from '@core/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent implements OnInit {
  @HostBinding('style.z-index') zIndex = '100';
  @HostBinding('class') class = 'mat-elevation-z6';
  @Input() appTitle = '';
  @Output() sidenavToggled = new EventEmitter();

  dark$: Observable<boolean>;

  constructor(
    private theme: ThemeService
  ) { }

  ngOnInit() {
    this.dark$ = this.theme.dark$;
  }

  click(btn: string) {
    switch (btn) {
      case ('sidenav'):
        this.sidenavToggled.emit(null);
        break;
      case ('theme'):
        this.theme.toggle();
        break;
    }
  }
}
