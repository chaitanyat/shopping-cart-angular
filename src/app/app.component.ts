import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppService } from './app.service';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'shopping-cart';
  products!: Product[];
  categories = ['All', 'Men Accessories', 'Women Accessories', 'Children Accessories', 'Sports Accessories']
  selectedCategory = 'All';
  addedProductsToCart: Product[] = [];
  openCheckoutPopup = false;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getJsonDb().subscribe((data: any) => this.products = data.products);
  }

  onCategoryChanged(event: any) {
    this.selectedCategory = event;
  }

  addToCart(product: Product) {
    this.addedProductsToCart.push(product);
  }

  checkoutCart() {
    if (this.addedProductsToCart.length > 0) {
      this.openCheckoutPopup = true;
    } else {

    }
  }

  checkoutProducts() {
    this.openCheckoutPopup = false;
  }
  closeCheckoutPopup() {
    this.openCheckoutPopup = false;
  }
}
