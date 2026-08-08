import { Component, input, Input, OnInit } from '@angular/core';
import { IonGrid, IonRow, IonLabel, IonCol, IonIcon, IonText, IonSkeletonText, IonItem } from "@ionic/angular/standalone";

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss'],
  imports: [IonItem, IonSkeletonText, IonRow, IonGrid, IonLabel, IonCol, IonIcon, IonText],
})
export class RestaurantDetailComponent  implements OnInit {

  @Input() data: any;
  @Input() isLoading: boolean = false;

  constructor() { }

  ngOnInit() {}

  getCuisines(cuisines: string[]) {
    return cuisines.join(', ');
  }
}
