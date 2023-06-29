import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { EPageIcon } from 'src/app/services/api.service';
import { BaseItensPageComponent } from '../base-itens-page/base-itens-page.component';
import { IItemData } from 'src/model/item-data.interface';

@Component({
  selector: 'app-people-page',
  templateUrl: './../base-itens-page/base-itens-page.component.html'
})
export class PeoplePageComponent extends BaseItensPageComponent implements OnInit {

  ngOnInit(): void {
    this.isLoadingResults = true;
    this.apiService
      .getAllPeople()
      .pipe(
        map(allPeople => {
          return allPeople.results.map((people) => {
            const content = `Gender: ${people.gender}`
            return {
              icon: EPageIcon.PEOPLE,
              title: people.name,
              subtitle: people.birth_year,
              content
            } as IItemData;
          })
        }),
        tap(allPeople => {
          this.isLoadingResults = false;
          this.itensList = [...allPeople];
        })
      ).subscribe()
  }

}
