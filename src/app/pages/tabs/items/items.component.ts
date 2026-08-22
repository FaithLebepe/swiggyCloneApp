import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { addOutline, cartOutline, removeOutline, star } from 'ionicons/icons';
import { Preferences } from '@capacitor/preferences';
import { ItemComponent } from 'src/app/components/item/item.component';
import { LoadingRestaurantComponent } from "src/app/components/loading-restaurant/loading-restaurant.component";
import { RestaurantDetailComponent } from 'src/app/components/restaurant-detail/restaurant-detail.component';
import { EmptyScreenComponent } from "src/app/components/empty-screen/empty-screen.component";
import { Api } from 'src/app/services/api/api';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  standalone: true,
  styleUrls: ['./items.component.scss'],
  imports: [ 
    IonicModule,
    ItemComponent,  
    LoadingRestaurantComponent,
    RestaurantDetailComponent,
    EmptyScreenComponent
  ],
})
export class ItemsComponent  implements OnInit {

  id: any;
  data: any = {}; // Restaurant data
  items: any[] = []; // Items for the selected restaurant
  isLoading: boolean = false; // Loading state
  veg: boolean = false;
  cartData: any = {};
  storeData: any = {}; 
  model = {
    icon: 'fast-food-outline',
    title: 'No-Menu-Available'
  }

  restaurants: any[] = [];
  categories: any[] = []; 
  allItems: any[] = [];

  constructor (
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private router: Router,
    private api:Api
  ) {
    addIcons({ star, removeOutline, addOutline, cartOutline });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      console.log('data: ',paramMap);
      if(!paramMap.has('restaurantId')) {
        this.navCtrl.back();
        return;
      } 
      this.id = paramMap.get('restaurantId');
      console.log('restaurantId: ', this.id);

      this.restaurants = this.api.restaurantsItems;
      this.categories = this.api.categories;
      this.allItems = this.api.allItems;
      
      this.getItems();

    });
  }

  getCart() {
    return Preferences.get({ key: 'cart' });
  }

  async getItems() {
    this.isLoading = true;
    this.data = {}; 
    this.cartData = {};
    this.storeData = {};

    setTimeout(async() => {
    this.data = this.restaurants.find(x => x.uid === this.id); 
    this.categories = this.categories.filter(x => x.uid === this.id); 
    this.items = this.allItems.filter(x => x.uid === this.id);
    let cart: any = await this.getCart()
    console.log('cart: ', cart);
    if(cart?.value) {
      this.storeData = JSON.parse(cart.value);
      console.log('storeData: ', this.storeData);

      // Check if the restaurant in the cart matches the current restaurant and if there are items in the cart
      if(this.id == this.storeData.restaurant.uid && this.allItems.length > 0) {
        this.allItems.forEach((element: any) => {
          this.storeData.items.forEach((cartItem: any) => {  
            if(element.id !== cartItem.id) { 
              return;
            }
            element.quantity = cartItem.quantity; 
          });
        })
      }
      this.cartData.totalItem = this.storeData.totalItem;
      this.cartData.totalPrice = this.storeData.totalPrice; 
    }
    this.isLoading = false;
    }, 3000);
  }

  vegOnly(event: any){
    console.log('vegOnly: ', event.detail.checked);
    this.items = [];
    if(event.detail.checked == true) {
      this.items = this.allItems.filter(x => x.uid === this.id && x.veg === true);
    }
    else {
      this.items = this.allItems;
      console.log('allItems: ', this.items);
    }
  }

  addToCart(index: number) {
    try {
      console.log('addToCart: ', index);
      
      if(!this.items[index].quantity) {
        this.items[index].quantity = 1; 
        this.calculate();
      } else {
        this.items[index].quantity++;
        this.calculate();
      }
    }
    catch (error) {
      console.error('Error adding to cart: ', error);
    }
  }

  removeFromCart(index: number) {
    if(this.items[index].quantity !== 0) {
      this.items[index].quantity--;
    } else {
      this.items[index].quantity = 0;
    }
    this.calculate();
  }

  calculate() {
    console.log('calculate: ', this.items);
    this.cartData.items = [];
    let item = this.items.filter(x => x.quantity > 0); 
    this.cartData.items = item;
    console.log('added items: ',item);
    this.cartData.totalPrice = 0;
    this.cartData.totalItem = 0;
    item.forEach((element: any) => { 
      this.cartData.totalItem += element.quantity;
      this.cartData.totalPrice += (parseFloat(element.price) * parseFloat(element.quantity)); 
    })
    this.cartData.totalPrice = parseFloat(this.cartData.totalPrice.toFixed(2)); 

    if(this.cartData.totalItem === 0) {
      this.cartData.totalPrice = 0;
      this.cartData.totalItem = 0;
    }
    console.log('cartData: ', this.cartData);
  }

  async saveToCart(){
    try{
      this.cartData.restaurant = {}
      this.cartData.restaurant = this.data;
      console.log('cartData: ', this.cartData);

      await Preferences.set({
        key: 'cart',
        value: JSON.stringify(this.cartData)
      });
    } catch (error) {
      console.error('Error saving to cart: ', error);
    }
  }

  async viewCart(){
    if(this.cartData.items && this.cartData.totalItem > 0) {
      await this.saveToCart();
      this.router.navigate([this.router.url + '/cart']);
    }
  }

}
