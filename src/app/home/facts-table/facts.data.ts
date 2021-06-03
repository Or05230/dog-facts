import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {FactsService} from '../../libs/services/facts.service';
import {FactsModel} from '../../libs/models/facts.model';

export class FactsData implements DataSource<FactsModel> {
  private facts = new BehaviorSubject<FactsModel[]>(null);
  private loading = new BehaviorSubject<boolean>(false);
  private length = new BehaviorSubject<number>(10);

  public loading$ = this.loading.asObservable();

  constructor(private factsService: FactsService) {}

  getLength(): Observable<number> {
    return this.length.asObservable();
  }

  connect(collectionViewer: CollectionViewer): Observable<FactsModel[]> {
    return this.facts.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.facts.complete();
    this.loading.complete();
  }

  loadFacts(pageSize: number, onlyUserFacts: boolean, page: number) {
    this.loading.next(true);
    this.factsService.getFacts(pageSize,onlyUserFacts, page).pipe(tap(response  => {
      if (response && response.total) {
        this.length.next(response.total)
      } else this.length.next(0);
    }),map(allFacts => allFacts.facts)).subscribe(res => {
      // @ts-ignore
      this.facts.next(res);
      this.loading.next(false);
    },(error => {
      console.log(error);
      this.loading.next(false);
    }))
  }
}
