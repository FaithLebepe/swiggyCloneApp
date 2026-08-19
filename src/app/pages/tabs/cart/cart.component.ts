import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewChild, viewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { addOutline, cartOutline, removeOutline, listOutline, homeOutline, chevronDownOutline } from 'ionicons/icons';
import { DecimalPipe } from '@angular/common';
import { IonContent } from '@ionic/angular';
import moment from 'moment';
import { CartItemComponent } from 'src/app/components/cart-item/cart-item.component';
import { EmptyScreenComponent } from 'src/app/components/empty-screen/empty-screen.component';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrls: ['./cart.component.scss'],
  standalone: true,
  imports: [IonicModule, DecimalPipe, CartItemComponent, EmptyScreenComponent ],
})
export class CartComponent  implements OnInit {

  @ViewChild(IonContent, {static: false}) content!: IonContent;
  urlCheck: any;
  url: any;
  model: any = {};
  deliveryCharge: number = 20;
  instruction: any;
  location:any = {}

  constructor(
    private router: Router
  ) { 
      addIcons({ removeOutline, addOutline, cartOutline, listOutline, homeOutline, chevronDownOutline });
  }

  ngOnInit() {
    this.checkUrl();
    this.getModel();
  }

  getCart() {
    return Preferences.get({ key: 'cart' });
  }

  async getModel(){
    let data: any = await this.getCart();
    this.location = {
      lat: -26.681564908718197,
      lng: 27.103305181838124,
      address: 'Oudebrug, Potchefstroom'
    }
    if(data?.value) { 
      this.model = await JSON.parse(data.value);
      console.log('cartData: ', this.model);
      this.calculate();
    }
  }

  async calculate() {
    let item = this.model.items.filter((x: any) => x.quantity > 0);
    this.model.items = item;
    this.model.totalItem = 0;
    this.model.totalPrice = 0;
    this.model.deliveryCharge = 0;
    this.model.grandTotal = 0;  

    item.forEach((element: any) => { 
      this.model.totalItem += element.quantity;
      this.model.totalPrice += (parseFloat(element.price) * parseFloat(element.quantity)); 
    });
    this.model.deliveryCharge = this.deliveryCharge;
    this.model.totalPrice = parseFloat(this.model.totalPrice.toFixed(2)); 
    this.model.grandTotal = parseFloat((this.model.totalPrice + this.model.deliveryCharge).toFixed(2));

    if(this.model.totalItem === 0) {
      this.model.totalPrice = 0;
      this.model.totalItem = 0;
      this.model.grandTotal = 0;  
      await this.ClearCart();
      this.model = null;
    }
    console.log('model: ', this.model);
  }

  ClearCart() {
    Preferences.remove({ key: 'cart' });
  }

  checkUrl(){
    let url: any = this.router.url.split('/');
    console.log('url: ', url);
    const spliced = url.splice(url.length - 2, 2); // Remove the last two segments of the URL
    this.urlCheck = spliced[0]; // Get the first segment of the spliced array
    console.log('urlCheck: ', this.urlCheck);
    url.push(this.urlCheck); // Add the first segment back to the URL array
    this.url = url; 
    console.log('url: ', this.url);
  }

  getPreviousUrl() {
    this.router.navigate([this.url.join('/')]);
  }

  addAddress(){}

  changeAddress(){}

  makePayment() {
    try {
      const data = {
        restaurant_id: this.model.restaurant.uid,
        res: this.model.restaurant,
        order: JSON.stringify(this.model.items),
        time: moment().format('lll'),
        address: this.location,
        total: this.model.totalPrice,
        grandTotal: this.model.grandTotal,
        deliveryCharge: this.model.deliveryCharge,
        status: 'Created',
        paid: 'COD'
      };
      console.log('order', data)
    } catch(e) {
      console.log(e);
    }
  }

  scrollToBottom(){
    this.content.scrollToBottom(500);
  }

  removeFromCart(index: any) {
    if(this.model.items[index].quantity !== 0) {
      this.model.items[index].quantity--;
    } else {
      this.model.items[index].quantity = 0;
    }
    this.calculate();
  }

  addToCart(index: any) {
    try {
      console.log(this.model.items[index]);
      
      if(!this.model.items[index].quantity) {
        this.model.items[index].quantity = 1; 
        this.calculate();
      } else {
        this.model.items[index].quantity++;
        this.calculate();
      }
    }
    catch (error) {
      console.error('Error adding to cart: ', error);
    }
  }

}
