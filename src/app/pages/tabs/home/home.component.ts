import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
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

      this.restaurants = [
        {
          uid: '12wefdss',
          cover: 'assets/imgs/1.jpg',
          name: 'Stayfit',
          short_name: 'stayfit',
          cuisines: [
            'Italian',
            'Mexican'
          ],
          rating: 5,
          delivery_time: 25,
          distance: 2.5,
          price: 100,
          serving: "One"
        },
        {
          uid: '12wefdefsdss',
          cover: 'assets/imgs/2.jpg',
          name: 'Stayfit1',
          short_name: 'stayfit1',
          cuisines: [
            'Italian',
            'Mexican'
          ],
          rating: 5,
          delivery_time: 25,
          distance: 2.5,
          price: 200,
          serving: "Two"
        },
        {
          uid: '12wefdssrete',
          cover: 'assets/imgs/3.jpg',
          name: 'Stayfit2',
          short_name: 'stayfit2',
          cuisines: [
            'Italian',
            'Mexican'
          ],
          rating: 5,
          delivery_time: 25,
          distance: 2.5,
          price: 300,
          serving: "Three"
        },
        {
          uid: '12wefdss',
          cover: 'assets/imgs/1.jpg',
          name: 'Stayfit',
          short_name: 'stayfit',
          cuisines: [
            'Italian',
            'Mexican'
          ],
          rating: 5,
          delivery_time: 20,
          price: 400,
          serving: "Four"
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
          price: 500,
          serving: "Five"
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
          price: 600,
          serving: "Six"
        },
      ];
      this.isLoading = false;
    }, 3000)

  }

}
