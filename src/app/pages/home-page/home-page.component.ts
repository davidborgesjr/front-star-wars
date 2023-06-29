import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICardOptions } from 'src/model/card-option.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],

})
export class HomePageComponent {
  cardOptions: ICardOptions[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.cardOptions = [
      {
        id: 'films',
        title: 'Films',
        description: 'Provides information about the franchise films',
        image: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        imageDescription: 'Image showing a star film cover',
      },
      {
        id: 'people',
        title: 'People',
        description: 'You can find information about characthers',
        image: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        imageDescription: 'Image showing a star film cover',
      },
      {
        id: 'planets',
        title: 'Planets',
        description: 'Gets the data about the planets',
        image: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        imageDescription: 'Image showing a star film cover',
      },
      {
        id: 'species',
        title: 'Species',
        description: 'Provides information about the franchise films',
        image: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        imageDescription: 'Image showing a star film cover',
      },
      {
        id: 'starships',
        title: 'Starships',
        description: 'You can find information about characthers',
        image: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        imageDescription: 'Image showing a star film cover',
      },
      {
        id: 'vehicles',
        title: 'Vehicles',
        description: 'Gets the data about the planets',
        image: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        imageDescription: 'Image showing a star film cover',
      }
    ]
  }

  onClickCard(card: ICardOptions) {
    const routeUrl = `/${card.id}`
    this.router.navigate([routeUrl])
  }

}
