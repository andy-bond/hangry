import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { HangryRoutingModule } from './hangry.routing';
import { HangryComponent } from './hangry.component';
import { DecisionComponent } from './decision/decision.component';
import { ChoiceComponent } from './decision/choice/choice.component';

@NgModule({
  declarations: [
    HangryComponent,
    DecisionComponent,
    ChoiceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    // material
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    // hangry
    HangryRoutingModule
  ]
})
export class HangryModule { }
