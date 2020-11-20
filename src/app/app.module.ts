import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { LayoutComponent } from '@core/layout';

@NgModule({
  imports: [
    CoreModule
  ],
  bootstrap: [
    LayoutComponent
  ]
})
export class AppModule { }
