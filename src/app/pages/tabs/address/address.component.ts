import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { briefcaseOutline, homeOutline, locationOutline } from 'ionicons/icons';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  imports: [IonicModule],
  standalone: true,
})
export class AddressComponent  implements OnInit {

  isLoading: boolean = false;
  addresses: any[] = [];


  constructor() { 
    addIcons({ homeOutline, briefcaseOutline, locationOutline });
  }

  ngOnInit() {
    this.getAddresses();
  }

  getAddresses() {    
    this.isLoading = true;
    setTimeout(() => {
      this.addresses = [      
        {address: "Oudebrug Estate, SA", house: "1st Floor", id: "7Kox63KlggTvV7ebRKar", landmark: "Fancy Bazar", lat: 26.1830738, lng: 91.74049769999999, title: "Home", user_id: "1"},
        {address: "Pukkie, SA", house: "Ground Floor", id: "8Kox63KlggTvV7ebRKar", landmark: "Bazar", lat: 26.1830738, lng: 91.74049769999999, title: "Work", user_id: "1"},
        {address: "Zera, SA", house: "2nd Floor", id: "8Kox63KlggTvV7ebRKar", landmark: "Bazar", lat: 26.1830738, lng: 91.74049769999999, title: "Fancy", user_id: "1"}

      ];
      this.isLoading = false;
    }, 3000);
  }

  getIcon(title: any) {
    const name = title.toLowerCase();
    switch(name) {
      case 'home': return 'home-outline';
      case 'work': return 'briefcase-outline';
      default: return 'location-outline';
    }
  }

  editAddress(){}
  deleteAddress(){}
}
