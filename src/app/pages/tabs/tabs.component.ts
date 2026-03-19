import { Component, OnInit } from '@angular/core';
import { SearchComponent } from "./search/search.component";
import { HomeComponent } from "./home/home.component";
import { CartComponent } from "./cart/cart.component";
import { AccountComponent } from "./account/account.component";

import { 
  IonTab, 
  IonTabs, 
  IonIcon,  
  IonTabBar, 
  IonTabButton 
} from "@ionic/angular/standalone";

import { addIcons } from 'ionicons';
import { 
  fastFoodOutline, 
  personOutline, 
  cartOutline, 
  searchOutline 
} from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  standalone: true,
    imports: [ 
      IonTab, 
      IonTabs, 
      IonIcon, 
      IonTab, 
      IonTabBar, 
      IonTabButton, 
      IonTabs, 
      SearchComponent, 
      HomeComponent, 
      CartComponent, 
      AccountComponent],

})
export class TabsComponent  implements OnInit {

  constructor() { 
    addIcons({ 
      fastFoodOutline, 
      personOutline, 
      cartOutline, 
      searchOutline 
    });
  }

  ngOnInit() {}

}
