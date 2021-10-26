import { Component, OnInit } from '@angular/core';
import {Price} from '../../shared/model/entity/Price';
import {ListPriceService} from '../../services/list-price.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css']
})
export class PriceListComponent implements OnInit {
  listPrice: Price[];

  constructor(private priceService: ListPriceService) { }

  ngOnInit(): void {
    this.getListPrice();
  }
  getListPrice() {
    this.priceService.getPrice().subscribe(
      (data: any) => {
        this.listPrice = data;
        console.log(data[0].time.split('h', 1)[0]);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      });
  }
}
