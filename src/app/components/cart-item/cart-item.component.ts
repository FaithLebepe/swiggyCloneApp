import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DecimalPipe } from '@angular/common';
import { addIcons } from 'ionicons';
import { addOutline, removeOutline } from 'ionicons/icons';
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  imports: [ IonicModule, DecimalPipe]
})
export class CartItemComponent  implements OnInit {

  @Input() item: any;
  @Input() index: any;
  @Output() add: EventEmitter<any> = new EventEmitter();
  @Output() remove: EventEmitter<any> = new EventEmitter();

  constructor() { 
    addIcons({ removeOutline, addOutline });
  }

  ngOnInit() {}

  addToCart() {
    this.add.emit(this.index);
  }

  removeFromCart() {
    this.remove.emit(this.index);
  }
  }


