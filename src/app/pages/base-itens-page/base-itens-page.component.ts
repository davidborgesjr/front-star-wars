import { Observable } from 'rxjs/internal/Observable';
import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { IItemData } from 'src/model/item-data.interface';

@Component({
  selector: 'app-base-itens-page',
  templateUrl: './base-itens-page.component.html',
  styleUrls: ['./base-itens-page.component.css']
})
export class BaseItensPageComponent {

  isLoadingResults = true;
  itensList: Observable<IItemData[]>;

  constructor(protected apiService: ApiService) {}

}
