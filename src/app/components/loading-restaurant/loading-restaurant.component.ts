import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-loading-restaurant',
  templateUrl: './loading-restaurant.component.html',
  styleUrls: ['./loading-restaurant.component.scss'],
  imports: [ IonicModule ],
})
export class LoadingRestaurantComponent  implements OnInit {

  dummy= Array(10);

  constructor() { }

  ngOnInit() {}

}
