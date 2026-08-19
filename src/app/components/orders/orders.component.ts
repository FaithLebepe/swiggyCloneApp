import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { checkmarkCircleOutline, chevronForwardOutline } from 'ionicons/icons';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  imports: [ IonicModule ],
  standalone: true,
})
export class OrdersComponent  implements OnInit {

  @Input() order: any;
  @Output() help: EventEmitter<any> = new EventEmitter;
  @Output() reorder: EventEmitter<any> = new EventEmitter;

  constructor() { 
    addIcons({ chevronForwardOutline, checkmarkCircleOutline });  
  }
  ngOnInit() {}

  reorderItem(){
    this.reorder.emit(this.order)
  }

  getHelp(){
    this.help.emit(this.order)
  }
}
