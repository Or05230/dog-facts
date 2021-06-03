import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {FactsTableModule} from './facts-table/facts-table.module';
import {CoreModule} from '../core/core.module';
import {FactPopUpModule} from './fact-pop-up/fact-pop-up.module';
import {MatSnackBarModule, MatTabsModule} from '@angular/material';
import {NewFactDialogModule} from './new-fact-dialog/new-fact-dialog.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [ BrowserModule, MatTabsModule, MatSnackBarModule, NewFactDialogModule, CoreModule, MatToolbarModule, MatButtonModule, MatCardModule, FactsTableModule, FactPopUpModule],
  bootstrap: [HomeComponent],
  exports: []
})
export class HomeModule {}
