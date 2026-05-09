import { Component, Input, OnInit } from '@angular/core';
import { IonGrid, IonIcon, IonRow, IonCol, IonLabel, IonText } from "@ionic/angular/standalone";

@Component({
  selector: 'app-empty-screen',
  templateUrl: './empty-screen.component.html',
  styleUrls: ['./empty-screen.component.scss'],
  imports: [IonText, IonLabel, IonCol, IonGrid, IonRow, IonCol, IonRow, IonIcon],
})
export class EmptyScreenComponent  implements OnInit {

  @Input() model: any;
  
  constructor() { }

  ngOnInit() {}

}
