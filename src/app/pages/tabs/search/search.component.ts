import { Component, OnInit, ViewChild } from '@angular/core';
import { IonHeader, IonToolbar, IonSearchbar, IonContent, IonList, IonLabel, IonListHeader } from "@ionic/angular/standalone";
import { LoadingRestaurantComponent } from "src/app/components/loading-restaurant/loading-restaurant.component";
import { RestaurantComponent } from "src/app/components/restaurant/restaurant.component";
import { EmptyScreenComponent } from "src/app/components/empty-screen/empty-screen.component";

import { addIcons } from 'ionicons';
import { 
  searchOutline 
} from 'ionicons/icons';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  standalone: true,
  imports: [IonListHeader, IonLabel, IonList, IonSearchbar, IonToolbar, IonHeader, IonContent, LoadingRestaurantComponent, RestaurantComponent, EmptyScreenComponent],
})
export class SearchComponent  implements OnInit {

  @ViewChild('searchInput') sInput: any;
  model: any = {
    icon: 'search-outline',
    title: 'No Restaurants found',
    description: 'Try searching for something else',
  };

  isLoading: boolean = false;
  query: any;

  constructor() {
    addIcons({   
      searchOutline 
    });
  }
  allRestaurants: any[] = [
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
          quantity: 'two',

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
          quantity: 'one',

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
          quantity: 'one',

        },
  ];

  restaurants: RestaurantComponent[] = [];

  

  ngOnInit() {
    setTimeout(() => {
      this.sInput.setFocus();
    }, 100);

  }

  async onSearchChange(event: any) {
    console.log(event.detail.value);
    this.query = event.detail.value.toLowerCase();
    this.restaurants = [];
    if (this.query.length > 0) {
      this.isLoading = true;

      setTimeout(async() => {
        this.restaurants = await this.allRestaurants.filter((element: any) => {
        return element.short_name.includes(this.query); //
      });
      console.log(this.restaurants);
      this.isLoading = false;
      }, 3000);
    }
  }
}
