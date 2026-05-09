import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonIcon 
} from "@ionic/angular/standalone";

import { addIcons } from 'ionicons';
import { 
  chevronDownOutline, star } from 'ionicons/icons';
import { BannerComponent } from "src/app/components/banner/banner.component";
import { RestaurantComponent } from "src/app/components/restaurant/restaurant.component";
import { LoadingRestaurantComponent } from "src/app/components/loading-restaurant/loading-restaurant.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  styleUrls: ['./home.component.scss'],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [IonIcon,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonContent, BannerComponent, RestaurantComponent, LoadingRestaurantComponent],
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
          cover: 'assets/imgs/1.jpg',
          name: 'Stayfit',
          short_name: 'stayfit',
          cuisines: [
            'Italian',
            'Mexican'
          ],
          rating: 5,
          time: 20,
          distance: 2.5,
          price: 100,
          quantity: 'two',

        },
        {
          cover: 'assets/imgs/2.jpg',
          name: 'Rocomamas',
          short_name: 'rocomamas',
          cuisines: [
            'Italian',
            'Mexican'
          ],
          rating: 3.7,
          time: 25,
          distance: 2,
          price: 100,
          quantity: 'one',

        },
        {
          cover: 'assets/imgs/3.jpg',
          name: 'Rocomamas',
          short_name: 'rocomamas',
          cuisines: [
            'Italian',
            'Mexican'
          ],
          rating: 3.7,
          time: 25,
          distance: 1.2909,
          price: 100,
          quantity: 'one',

        },
      ];
      this.isLoading = false;
    }, 3000)

  }

}
