import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LoadingRestaurantComponent } from "src/app/components/loading-restaurant/loading-restaurant.component";
import { RestaurantComponent } from "src/app/components/restaurant/restaurant.component";
import { EmptyScreenComponent } from "src/app/components/empty-screen/empty-screen.component";
import { addIcons } from 'ionicons';
import { 
  searchOutline 
} from 'ionicons/icons';
import { Api } from 'src/app/services/api/api';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    LoadingRestaurantComponent,
    RestaurantComponent,
    EmptyScreenComponent
  ],
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
  allRestaurants: any[] = [];
  restaurants: RestaurantComponent[] = [];

  constructor( private api:Api) {
    addIcons({   
      searchOutline 
    });
  }
  
  ngOnInit() {
    setTimeout(() => {
      this.allRestaurants = this.api.allRestaurants;
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
