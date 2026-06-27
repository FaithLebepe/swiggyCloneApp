import { DecimalPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { 
  IonItem, 
  IonThumbnail, 
  IonLabel, 
  IonText, 
  IonIcon 
} from "@ionic/angular/standalone";

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  standalone: true,
  imports: [ 
    IonItem, 
    IonThumbnail, 
    IonLabel, 
    IonText, 
    IonIcon, 
    IonLabel, 
    DecimalPipe,
    RouterLink,
  ],
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent  implements OnInit {

  @Input() restaurants:any;

  constructor() { }

  getCuisines(cuisines: string): string {
    if (cuisines.length > 20) {
      return cuisines.substring(0, 20) + '...';
    }
    return cuisines;
  }

  ngOnInit() {}

}
