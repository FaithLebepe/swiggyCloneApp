import { Component, OnInit } from '@angular/core';

import { 
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
      IonTabs, 
      IonIcon, 
      IonTabBar, 
      IonTabButton, 
      IonTabs, 
],

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
