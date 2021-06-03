import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

import {FactPopUpComponent} from './fact-pop-up.component';

@NgModule({
  declarations: [FactPopUpComponent],
  entryComponents: [FactPopUpComponent],
  exports: [FactPopUpComponent],
  imports: [
      MatIconModule, CommonModule,
    MatTooltipModule, MatCardModule,
    MatInputModule, MatDialogModule,
    MatButtonModule, FormsModule,
    ReactiveFormsModule, MatFormFieldModule
  ],
})
export class FactPopUpModule {}
