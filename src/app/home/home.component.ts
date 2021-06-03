import {Component, ViewChild} from '@angular/core';
import {MatDialog, MatSnackBar, MatTabChangeEvent} from '@angular/material';
import {FormGroup} from '@angular/forms';
import {take} from 'rxjs/operators';

import {FactsTableComponent} from './facts-table/facts-table.component';
import {NewFactDialogComponent} from './new-fact-dialog/new-fact-dialog.component';
import {FactsService} from '../libs/services/facts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild(FactsTableComponent, { static: false }) factsTable: FactsTableComponent;

  selectedIndex: number = 0;
  constructor(private dialog: MatDialog, private factsService: FactsService, private snackBar: MatSnackBar) {}


  tabChanged(evt: MatTabChangeEvent): void {
    this.selectedIndex = evt.index;
    this.factsTable.paginator.pageIndex = 0;
    this.factsTable.loadFacts(evt.index === 1)

  }


  onAddNewFact() {
    const dialogRef = this.dialog.open(NewFactDialogComponent, {
      disableClose: true,
      autoFocus: true,
      restoreFocus: false,
      hasBackdrop: true,
      backdropClass: 'dialog-open',
      width: '500px',
      data: null,
    });

    dialogRef.afterClosed().pipe(take(1)).subscribe(async (form: FormGroup) => {
      if (form) {
        this.factsService.sendFact(form.getRawValue()).subscribe(res => {
          if (res) {
            let msg = this.selectedIndex === 1? 'Fact Added': `Fact Added, Navigate to My Facts tab to view`
            this.snackBar.open(msg, this.selectedIndex === 1? 'DISMISS': 'View My Facts',
                {duration: 5000}).onAction().pipe(take(1)).subscribe(action => {
                  if (this.selectedIndex === 0) {
                    this.selectedIndex = 1;
                  }
            })
            this.factsTable.loadFacts(this.selectedIndex === 1);
          }
        });
      }
    });
  }

}
