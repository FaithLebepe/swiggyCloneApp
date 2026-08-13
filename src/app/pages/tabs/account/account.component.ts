import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  imports: [ IonicModule ],
  standalone: true,
})
export class AccountComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
