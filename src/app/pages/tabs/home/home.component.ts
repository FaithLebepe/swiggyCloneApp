import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { chevronDownOutline, restaurant, star } from 'ionicons/icons';
import { BannerComponent } from "src/app/components/banner/banner.component";
import { RestaurantComponent } from "src/app/components/restaurant/restaurant.component";
import { LoadingRestaurantComponent } from "src/app/components/loading-restaurant/loading-restaurant.component";
import { Api } from 'src/app/services/api/api';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  styleUrls: ['./home.component.scss'],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    IonicModule,
    BannerComponent, 
    RestaurantComponent, 
    LoadingRestaurantComponent, 
  ],
})
export class HomeComponent  implements OnInit {

  banners: any[] = [];
  restaurants: any = [];
  isLoading: boolean = false;

  constructor(private api: Api) {
    addIcons({ chevronDownOutline, star });
  }

  ngOnInit() {
    this.isLoading = true;

    setTimeout(() => {
      this.banners = this.api.banners;
      this.restaurants = this.api.restaurants;
      this.isLoading = false;
    }, 3000);
  }

}
