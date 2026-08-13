import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-empty-screen',
  templateUrl: './empty-screen.component.html',
  styleUrls: ['./empty-screen.component.scss'],
  imports: [ IonicModule ],
})
export class EmptyScreenComponent  implements OnInit {

  @Input() model: any;
  
  constructor() { }

  ngOnInit() {}

}
