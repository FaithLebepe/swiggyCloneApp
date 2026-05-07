import { Component, OnInit } from '@angular/core';
import { IonList, IonItem, IonSkeletonText, IonListHeader, IonLabel, IonThumbnail } from "@ionic/angular/standalone";

@Component({
  selector: 'app-loading-restaurant',
  templateUrl: './loading-restaurant.component.html',
  styleUrls: ['./loading-restaurant.component.scss'],
  imports: [IonLabel, IonSkeletonText, IonItem, IonList, IonThumbnail],
})
export class LoadingRestaurantComponent  implements OnInit {

  dummy= Array(10);

  constructor() { }

  ngOnInit() {}

}
