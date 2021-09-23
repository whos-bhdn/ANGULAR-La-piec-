import {Injectable} from '@angular/core';
import { IDiscountResponse } from '../../interfaces/discount/discount.interface';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  private discounts: Array<IDiscountResponse> = [
    {
      id: 1,
      description: `Акция «2+1» действует в понедельник, вторник, среду и четверг. Заказывайте две пиццы и получайте ещё одну бесплатно!
      * Бесплатной считается пицца с наименьшей стоимостью.
      ** Эта акция не сочетается с другими акциями.`,
      imagePath: "https://la.ua/wp-content/uploads/2021/08/4.png"
    },
    {
      id: 2,
      description: `Получите 100 грн за … дружеский совет!
      Если ваш друг, сделает у нас заказ благодаря вашим рекомендациям, то вы оба гарантированно получите по 100 грн.`,
      imagePath: "https://la.ua/wp-content/uploads/2021/08/pryvedy-druga.jpg"
    }
  ];

  constructor() {
  }

  getDiscounts(): Array<IDiscountResponse> {
    return this.discounts;
  }

  addDiscount(discount: IDiscountResponse): void {
    this.discounts.push(discount);
  }

  updateDiscount(discount: IDiscountResponse, id: number){
    const index = this.discounts.findIndex(d => d.id === id)
    this.discounts.splice(index, 1, discount);
  }

  deleteDiscount(id: number): void {
    const index = this.discounts.findIndex(d => d.id === id)
    this.discounts.splice(index, 1);
  }
}
