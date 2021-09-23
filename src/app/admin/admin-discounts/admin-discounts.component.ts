import { Component, OnInit } from '@angular/core';
import { DiscountService } from 'src/app/shared/services/discount/discount.service';
import {IDiscountResponse} from "../../shared/interfaces/discount/discount.interface";

@Component({
  selector: 'app-admin-discounts',
  templateUrl: './admin-discounts.component.html',
  styleUrls: ['./admin-discounts.component.scss']
})
export class AdminDiscountsComponent implements OnInit {

  public adminDiscounts: Array<IDiscountResponse> = [];
  public currentDiscount!: IDiscountResponse;
  public currentDiscountID!: number;
  public editStatus = false;
  public description = '';
  public imagePath = 'https://la.ua/wp-content/uploads/2021/08/7.jpg';

  constructor(private discountService: DiscountService) { }

  ngOnInit(): void {
    this.loadDiscounts();
  }

  loadDiscounts(): void {
    this.adminDiscounts = this.discountService.getDiscounts();
  }

  saveDiscount(): void {
    const discount: IDiscountResponse = {
      id: Math.round(Math.random()*1000),
      description: this.description,
      imagePath: this.imagePath
    };
    this.discountService.addDiscount(discount);
  }

  deleteDiscount(discount: IDiscountResponse): void{
    this.discountService.deleteDiscount(discount.id);
  }

  editDiscount(discount: IDiscountResponse): void {
    this.description = discount.description;
    this.currentDiscountID = discount.id;
    this.editStatus = true;
  }

}
