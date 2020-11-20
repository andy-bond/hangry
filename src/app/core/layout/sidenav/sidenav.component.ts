import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NavigationSection } from '../../models';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  nav$: Observable<NavigationSection[]>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.nav$ = this.http.get<NavigationSection[]>('assets/content/navigation.json');
  }

  navCheck(item: NavigationSection) {
    // return false if section should not display for the given user
    return true;
  }
}
