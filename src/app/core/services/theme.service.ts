import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { WINDOW } from '@ng-web-apis/common';
import { environment } from '@environments/environment';
import { StorageService } from './storage.service';

const THEME_DARK = 'theme-dark';
const THEME_LIGHT = 'theme-light';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // Pull from environments in a real project
  // Make unique per application (use application name in key)
  private readonly key = `${environment.name}-theme`;
  // Dark Theme Boolean
  private readonly dark = new BehaviorSubject<boolean>(this.default());
  get dark$(): Observable<boolean> { return this.dark.asObservable(); }

  constructor(
    @Inject(WINDOW) private window: Window,
    @Inject(DOCUMENT) private document: Document,
    private storage: StorageService
  ) {
    // Get the Body Element
    const body = this.document.getElementsByTagName('body')[0];
    this.dark.subscribe(isDark => {
      const theme = isDark ? THEME_DARK : THEME_LIGHT;
      body.classList.remove(isDark ? THEME_LIGHT : THEME_DARK);
      body.classList.add(theme);
      this.storage.set('local', this.key, theme);
    });
  }

  // Determines the default theme (upon app launch)
  // If you don't want it to default to the users device theme, modify the 'prefersDark' variable (true = dark)
  private default(): boolean {
    const previous = this.storage.get('local', this.key);
    const prefersDark = this.window ? this.window.matchMedia('(prefers-color-scheme: dark)').matches === true : false;
    return previous ? (previous === THEME_DARK) : prefersDark;
  }

  // Toggles between light & dark theme
  toggle() {
    this.dark.next(!this.dark.value);
  }
}
