import { Component, input, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss'],
  imports: [ IonicModule ],
  standalone: true,
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
