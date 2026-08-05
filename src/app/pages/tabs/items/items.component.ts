import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonGrid, IonRow, IonText, IonLabel, IonCol, IonIcon, IonToggle, IonList, IonListHeader, IonItem, IonThumbnail, IonFooter, IonButton } from "@ionic/angular/standalone";
import { NavController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { addOutline, cartOutline, removeOutline, star } from 'ionicons/icons';
import { DecimalPipe } from '@angular/common';
import { Preferences } from '@capacitor/preferences';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  standalone: true,
  styleUrls: ['./items.component.scss'],
  imports: [ DecimalPipe, IonFooter, IonItem, IonListHeader, IonList, IonToggle, IonIcon, IonLabel, IonText, IonRow, IonTitle, IonToolbar, IonHeader, IonContent, IonButtons, IonBackButton, IonGrid, IonCol, IonThumbnail, IonButton],
})
export class ItemsComponent  implements OnInit {

  id: any;
  data: any = {}; // Restaurant data
  items: any[] = []; // Items for the selected restaurant
  veg: boolean = false;
  cartData: any = {};
  storeData: any = {}; 

  constructor (
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private router: Router
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

      this.getItems();

    });
  }

  getCart() {
    return Preferences.get({ key: 'cart' });
  }

  async getItems() {
    this.data = {}; 
    this.cartData = {};
    this.storeData = {};
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
  }

  getCuisines(cuisines: string[]) {
    return cuisines.join(', ');
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

  addToCart(item: any, index: number) {
    try {
      console.log('addToCart: ', item, index);
      
      if(!this.items[index].quantity || this.items[index].quantity === 0) {
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

  removeFromCart(item: any, index: number) {
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
    item.forEach((element: any) => { //
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
      this.router.navigate(['/tabs/cart']);
      // this.router.navigate([this.router.url +'/cart']);
    }
  }

  

  restaurants = [
        {
          uid: "12wefdss",
          cover: 'assets/imgs/1.jpg',
          name: 'Stayfit',
          short_name: 'stayfit',
          address: '123 Main St, City, Country',
          cuisines: [
            'Italian',
            'Mexican'
          ],
          rating: 5,
          delivery_time: 20,
          price: 200,
          serving: "Two"
        },
        {
          uid: '12wefdefsdss',
          cover: 'assets/imgs/2.jpg',
          name: 'Dorys',
          short_name: 'dorys',
          address: '456 Elm St, City, Country',
          cuisines: [
            'Italian',
            'Mexican'
          ],
          rating: 3.7,
          delivery_time: 25,
          price: 100,
          serving: "One"
        },
        {
          uid: '12wefdssrete',
          cover: 'assets/imgs/3.jpg',
          name: 'Rocomamas',
          short_name: 'rocomamas',
          address: '789 Oak St, City, Country',
          cuisines: [
            'Italian',
            'Mexican'
          ],
          rating: 3.7,
          delivery_time: 25,
          price: 300,
          serving: "Three"
        },
      ];


  categories: any[] = [
    {
      id: "e00",
      name: "Italian",
      uid: "12wefdss"
    },
    {
      id: "e0",
      name: "Mexican",
      uid: "12wefdss"
    },
  ]; 

  allItems = [
    {
        category_id: "e00",
        cover: "assets/imgs/pizza.jpg",
        desc: "Great in taste",
        id: "i1",
        name: "Pizza",
        price: 120,
        rating: 0,
        status: true,
        uid: "12wefdss",
        variation: false,
        veg: false
    },
    {
        category_id: "e0",
        cover: "assets/imgs/salad.jpg",
        desc: "Great in taste",
        id: "i2",
        name: "Caprese Salad",
        price: 200,
        rating: 0,
        status: true,
        uid: "12wefdss",
        variation: false,
        veg: true
    },
    {
        category_id: "e00",
        cover: "assets/imgs/pasta.jpg",
        desc: "Great in taste",
        id: "i3",
        name: "Pasta",
        price: 150.50,
        rating: 0,
        status: true,
        uid: "12wefdss",
        variation: false,
        veg: false
    },
  ];

}
