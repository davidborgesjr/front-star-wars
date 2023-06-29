import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { IFilm } from '../../model/film.interface';
import { IPeople } from 'src/model/people.interface';

export interface IResult {
  count: number;
  next: any;
  previous: null;
}

export interface IResultFilm extends IResult {
  results: IFilm[];
}

export interface IResultPeople extends IResult {
  results: IPeople[];
}

export type IResultType = IResultFilm | IResultPeople;

export enum EPageIcon {
  FILM = 'movie_info',
  PEOPLE = 'person',
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  private getApiUrl() {
    return 'https://swapi.dev/api';
  }

  getAllFilms(): Observable<IResultFilm> {
    return this.httpClient.get<IResultFilm>(`${this.getApiUrl()}/films`);
  }

  getAllPeople(): Observable<IResultPeople> {
    return this.httpClient.get<IResultPeople>(`${this.getApiUrl()}/people`);
  }

  getAllStarships(): Observable<IResultPeople> {
    return this.httpClient.get<IResultPeople>(`${this.getApiUrl()}/people`);
  }

}
