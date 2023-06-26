import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICardOptions } from 'src/model/card-option.interface';

@Component({
  selector: 'star-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  cardOptions: ICardOptions[] = [];

  constructor(private router: Router){}

  ngOnInit() {
    this.cardOptions = [
      {
        id: '1',
        title: 'Films',
        description: 'Provides information about the franchise films',
        image: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        imageDescription: 'Image showing a star film cover',
      },
      {
        id: '2',
        title: 'People',
        description: 'You can find information about characthers',
        image: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        imageDescription: 'Image showing a star film cover',
      },
      {
        id: '3',
        title: 'Planets',
        description: 'Gets the data about the planets',
        image: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        imageDescription: 'Image showing a star film cover',
      },
      {
        id: '4',
        title: 'Species',
        description: 'Provides information about the franchise films',
        image: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        imageDescription: 'Image showing a star film cover',
      },
      {
        id: '5',
        title: 'Starships',
        description: 'You can find information about characthers',
        image: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        imageDescription: 'Image showing a star film cover',
      },
      {
        id: '6',
        title: 'Vehicles',
        description: 'Gets the data about the planets',
        image: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        imageDescription: 'Image showing a star film cover',
      }
    ]
  }

  onClickCard(card: ICardOptions) {
    console.log('Card selected: ', card);
    this.router.navigate(['/item', card.id])
  }

}
