import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { 
  IonItem, 
  IonThumbnail, 
  IonLabel, 
  IonRow, 
  IonIcon,
  IonText
  } from "@ionic/angular/standalone";
import { DecimalPipe } from '@angular/common';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  imports: [
    IonRow,
    DecimalPipe,
    IonItem,
    IonThumbnail,
    IonLabel,
    IonIcon,
    IonText
],
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent  implements OnInit {

  @Input() item: any;
  @Input() index: number = 0;
  @Output() add: EventEmitter<any> = new EventEmitter();
  @Output() remove: EventEmitter<any> = new EventEmitter();

  addToCart() {
    this.add.emit(this.index);
  }

  removeFromCart() {
    this.remove.emit(this.index);
  }

  constructor() { }

  ngOnInit() {}

}
