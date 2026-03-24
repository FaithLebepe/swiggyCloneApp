import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular/standalone';
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
    IonContent
  ],
})
export class HomeComponent  implements OnInit {

  swiperModules = [IonicSlides];

  constructor() { 
    addIcons({chevronDownOutline,star});
  }

  ngOnInit() {}

}
