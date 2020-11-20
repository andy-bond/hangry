import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { WinAuthInterceptor } from './interceptors';
import { LayoutComponent, TitleBarComponent, SidenavComponent, NotFoundComponent } from './layout';
import { CoreRoutingModule } from './core.routing';

@NgModule({
  declarations: [
    LayoutComponent,
    TitleBarComponent,
    SidenavComponent,
    NotFoundComponent
  ],
  imports: [
    // angular
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    // material (core use only, do not include shared module)
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    // core
    CoreRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: WinAuthInterceptor, multi: true }
  ]

})
export class CoreModule { }
