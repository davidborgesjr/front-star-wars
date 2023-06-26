import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFilme } from 'src/model/film.interface';
import { Observable } from 'rxjs/internal/Observable';
import { IPeople } from 'src/model/people.interface';

export interface IResult{
  count: number;
  next: any;
  previous: null,
  results: []
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  private getApiUrl() {
    return 'https://swapi.dev/api';
  }

  getAllFilms(): Observable<IResult>{
    return this.httpClient.get<IResult>(`${this.getApiUrl()}/films`);
  }

}
