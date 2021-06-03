import {Component, OnInit, Input, ViewChild, ChangeDetectorRef, AfterViewInit, OnDestroy, OnChanges, SimpleChanges} from '@angular/core';

import { Router } from '@angular/router';
import { merge } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import {FactsData} from './facts.data';
import {FactsService} from '../../libs/services/facts.service';
import {FactsModel} from '../../libs/models/facts.model';
import {FactPopUpComponent} from '../fact-pop-up/fact-pop-up.component';

@Component({
  selector: 'app-facts-table',
  templateUrl: './facts-table.component.html',
  styleUrls: ['./facts-table.component.scss'],
})
export class FactsTableComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @Input() selectedIndex: number;

  length = 5;
  displayedColumns: String[] = ['No','Fact', 'AddedBy'];
  dataSource: FactsData;
  pageSize = 5;

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
    private factsService: FactsService,
    private dialog: MatDialog

  ) {}

  ngOnInit() {
    this.dataSource = new FactsData(this.factsService);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.selectedIndex.currentValue){
      this.selectedIndex = changes.selectedIndex.currentValue;
    }
  }

  ngAfterViewInit() {

    this.dataSource.getLength().subscribe((newLength) => {
      this.length = newLength;
    });
    this.loadFacts()
    // Update table event
    merge(this.paginator.page)
      .pipe(tap(() => this.loadFacts()))
      .subscribe();
    this.cdr.detectChanges();
  }

  loadFacts(loadOnlyMyFacts: boolean = this.selectedIndex === 1) {

    this.dataSource.loadFacts(this.paginator.pageSize, loadOnlyMyFacts, this.paginator.pageIndex);
  }

  openFullFactDialog(row: FactsModel) {
    const dialogRef = this.dialog.open(FactPopUpComponent, {
      autoFocus: true,
      restoreFocus: false,
      hasBackdrop: true,
      backdropClass: 'dialog-open',
      width: '500px',
      data: {
        popUpData: row,
        title_exit_icon: 'clear',
      },
    });
  }


}
