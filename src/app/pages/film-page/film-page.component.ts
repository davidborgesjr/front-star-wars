import { EPageIcon } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { BaseItensPageComponent } from '../base-itens-page/base-itens-page.component';
import { IItemData } from 'src/model/item-data.interface';

@Component({
  selector: 'app-film-page',
  templateUrl: './../base-itens-page/base-itens-page.component.html',
  styleUrls: ['./../base-itens-page/base-itens-page.component.css']
})
export class FilmPageComponent extends BaseItensPageComponent implements OnInit {

  ngOnInit(): void {
    this.isLoadingResults = true;
    this.itensList = this.apiService
      .getAllFilms()
      .pipe(
        map(allFilms => {
          return allFilms.results.map((film) => {
            return {
              icon: EPageIcon.FILM,
              title: film.title,
              subtitle: film.release_date,
              content: film.opening_crawl
            } as IItemData;
          })
        })
      );
  }

}
