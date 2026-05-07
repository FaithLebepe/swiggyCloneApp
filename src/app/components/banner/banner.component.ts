import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { IonRow } from "@ionic/angular/standalone";
import { IonicSlides } from '@ionic/angular/standalone';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  standalone: true,
  imports: [IonRow, CommonModule],
})
export class BannerComponent  implements OnInit {

  @Input() bannerImages: any;

  swiperModules = [IonicSlides];

  constructor() { }

  ngOnInit() {}

}
