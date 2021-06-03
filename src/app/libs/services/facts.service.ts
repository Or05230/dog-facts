import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {FactsModel} from '../models/facts.model';

@Injectable({
  providedIn: 'root'
})
export class FactsService {
  BACKEND_URL = 'http://localhost:3000'

  constructor(private httpClient : HttpClient) {
  }

  getFacts(amount: number,onlyUserFacts: boolean, page: number) : Observable<FactsModel>{
    let data = {
      amount: amount,
      onlyUserFacts: onlyUserFacts,
      page: page
    }
    return this.httpClient.get<FactsModel >( this.BACKEND_URL + `/facts/${JSON.stringify(data)}`);
  }

  sendFact(values: FactsModel['facts'][0]): Observable<FactsModel> {
    return this.httpClient.post<FactsModel>(this.BACKEND_URL + "/facts/new-fact", values)
  }

}
