import { IFilme } from './../../model/film.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { tap } from 'rxjs';

@Component({
  selector: 'star-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  results: IFilme[] = [];

  isLoadingResults = true;
  panelOpenState = false;

  constructor(private route: ActivatedRoute,
    private apiService: ApiService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.apiService.getAllFilms().pipe(
      tap(allFilms => {
        this.isLoadingResults = false;
        this.results = allFilms.results;

        console.log('this.results');
        console.log(this.results);
      })
    ).subscribe()
  }
}
