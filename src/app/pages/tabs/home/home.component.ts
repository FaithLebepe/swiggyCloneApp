import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonIcon 
} from "@ionic/angular/standalone";

import { addIcons } from 'ionicons';
import { chevronDownOutline, star } from 'ionicons/icons';
import { BannerComponent } from "src/app/components/banner/banner.component";
import { RestaurantComponent } from "src/app/components/restaurant/restaurant.component";
import { LoadingRestaurantComponent } from "src/app/components/loading-restaurant/loading-restaurant.component";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  styleUrls: ['./home.component.scss'],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    IonIcon,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonContent, 
    BannerComponent, 
    RestaurantComponent, 
    LoadingRestaurantComponent, 
  ],
})
export class HomeComponent  implements OnInit {

  banners: any[] = [];
  restaurant: any = [];
  isLoading: boolean = false;

  constructor() { 
    addIcons({chevronDownOutline, star});
  }

  ngOnInit() {
    this.isLoading = true;

    setTimeout(() => {
        this.banners = [
        {banner: 'assets/imgs/1.jpg'},
        {banner: 'assets/imgs/2.jpg'},
        {banner: 'assets/imgs/3.jpg'},
      ];

      this.restaurant = [
        {
          uid: '1234',
          cover: 'assets/imgs/1.jpg',
          name: 'Stayfit',
          short_name: 'stayfit',
          cuisines: [
            'Italian',
            'Mexican'
          ],
          rating: 5,
          delivery_time: 20,
          price: 100,
          quantity: 'Two',

        },
        {
          uid: '5678',
          cover: 'assets/imgs/2.jpg',
          name: 'Dorys',
          short_name: 'dorys',
          cuisines: [
            'Italian',
            'Mexican'
          ],
          rating: 3.7,
          delivery_time: 25,
          price: 100,
          quantity: 'One',

        },
        {
          uid: '9012',
          cover: 'assets/imgs/3.jpg',
          name: 'Rocomamas',
          short_name: 'rocomamas',
          cuisines: [
            'Italian',
            'Mexican'
          ],
          rating: 3.7,
          delivery_time: 25,
          price: 100,
          quantity: 'One',

        },
      ];
      this.isLoading = false;
    }, 3000)

  }

}
