import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonicSlides } from '@ionic/angular/standalone';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  standalone: true,
  imports: [ IonicModule ],
})
export class BannerComponent  implements OnInit {

  @Input() bannerImages: any;

  swiperModules = [IonicSlides];

  constructor() { }

  ngOnInit() {}

}
