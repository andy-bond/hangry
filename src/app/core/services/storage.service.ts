import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, SESSION_STORAGE } from '@ng-web-apis/common';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  // Use localStorage for persisting data between browser exits
  // Use sessionStorage for data that will disappear upon browser exit
  constructor(
    @Inject(LOCAL_STORAGE) private localStorage: Storage,
    @Inject(SESSION_STORAGE) private sessionStorage: Storage
  ) { }

  // Retrieve a value from storage
  get(medium: 'local' | 'session', key: string): string | null {
    switch (medium) {
      case 'local':
        if (this.localStorage) {
          return this.localStorage.getItem(key);
        }
        break;
      case 'session':
        if (this.sessionStorage) {
          return this.sessionStorage.getItem(key);
        }
        break;
      default:
        return null;
    }
  }

  // Set a value in storage
  set(medium: 'local' | 'session', key: string, value: string): void {
    switch (medium) {
      case 'local':
        if (this.localStorage) {
          this.localStorage.setItem(key, value);
        }
        break;
      case 'session':
        if (this.sessionStorage) {
          this.sessionStorage.setItem(key, value);
        }
        break;
      default:
        break;
    }
  }
}
