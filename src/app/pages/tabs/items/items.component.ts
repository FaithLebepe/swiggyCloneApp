import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ɵEmptyOutletComponent } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonGrid, IonRow, IonText, IonLabel, IonCol, IonIcon, IonToggle, IonList, IonListHeader, IonItem, IonThumbnail, IonAccordion, IonFooter, IonButton } from "@ionic/angular/standalone";
import { NavController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { addOutline, cartOutline, removeOutline, star } from 'ionicons/icons';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  standalone: true,
  styleUrls: ['./items.component.scss'],
  imports: [IonFooter, IonItem, IonListHeader, IonList, IonToggle, IonIcon, IonLabel, IonText, IonRow, IonTitle, IonToolbar, IonHeader, IonContent, IonButtons, IonBackButton, IonGrid, IonCol, IonThumbnail, ɵEmptyOutletComponent, IonAccordion, IonButton],
})
export class ItemsComponent  implements OnInit {

  id: any;
  data: any = {};
  items: any[] = [];
  veg: boolean = false;

  constructor (
    private navCtrl: NavController,
    private route: ActivatedRoute,
  ) {
    addIcons({ star, removeOutline, addOutline, cartOutline });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      console.log('data: ',paramMap);
      if(!paramMap.has('restaurantId')) {
        this.navCtrl.back();
        return;
      } 
      this.id = paramMap.get('restaurantId');
      console.log('restaurantId: ', this.id);

      this.getItems();

    });
  }

  getItems() {
    this.data = this.restaurants.find(x => x.uid === this.id); 
    this.items = this.allItems;
  }

  getCuisines(cuisines: string[]) {
    return cuisines.join(', ');
  }

  vegOnly(event: any){
    console.log('vegOnly: ', event.detail.checked);
  }

  restaurants = [
        {
          uid: '1234',
          cover: 'assets/imgs/1.jpg',
          name: 'Stayfit',
          short_name: 'stayfit',
          address: '123 Main St, City, Country',
          cuisines: [
            'Italian',
            'Mexican'
          ],
          rating: 5,
          delivery_time: 20,
          price: 100,
          quantity: 'two',

        },
        {
          uid: '5678',
          cover: 'assets/imgs/2.jpg',
          name: 'Dorys',
          short_name: 'dorys',
          address: '456 Elm St, City, Country',
          cuisines: [
            'Italian',
            'Mexican'
          ],
          rating: 3.7,
          delivery_time: 25,
          price: 100,
          quantity: 'one',

        },
        {
          uid: '9012',
          cover: 'assets/imgs/3.jpg',
          name: 'Rocomamas',
          short_name: 'rocomamas',
          address: '789 Oak St, City, Country',
          cuisines: [
            'Italian',
            'Mexican'
          ],
          rating: 3.7,
          delivery_time: 25,
          price: 100,
          quantity: 'one',

        },
      ];


  categories: any[] = [
    {
      id: "e00",
      name: "Italian",
      uid: "12wefdss"
    },
    {
      id: "e0",
      name: "Mexican",
      uid: "12wefdss"
    },
  ]; 

  allItems = [
    {
        category_id: "e00",
        cover: "assets/imgs/pizza.jpg",
        desc: "Great in taste",
        id: "i1",
        name: "Pizza",
        price: 120,
        rating: 0,
        status: true,
        uid: "12wefdss",
        variation: false,
        veg: false
    },
    {
        category_id: "e0",
        cover: "assets/imgs/salad.jpg",
        desc: "Great in taste",
        id: "i2",
        name: "Caprese Salad",
        price: 200,
        rating: 0,
        status: true,
        uid: "12wefdss",
        variation: false,
        veg: true
    },
    {
        category_id: "e00",
        cover: "assets/imgs/pasta.jpg",
        desc: "Great in taste",
        id: "i3",
        name: "Pasta",
        price: 150.50,
        rating: 0,
        status: true,
        uid: "12wefdss",
        variation: false,
        veg: false
    },
  ];

}
