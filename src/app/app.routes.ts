import { Routes } from '@angular/router';
import { TabsComponent } from './pages/tabs/tabs.component';
import { HomeComponent } from './pages/tabs/home/home.component';
import { SearchComponent } from './pages/tabs/search/search.component';
import { CartComponent } from './pages/tabs/cart/cart.component';
import { AccountComponent } from './pages/tabs/account/account.component';
import { ItemsComponent } from './pages/tabs/items/items.component';
import { AddressComponent } from './pages/tabs/address/address.component';

export const routes: Routes = [
  { 
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    component: TabsComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path: 'account',
        component: AccountComponent
      },
    ]
  },
  {
    path: 'restaurant/:restaurantId/cart',
    component: CartComponent
  },
  {
    path: 'restaurant/:restaurantId',
    component: ItemsComponent
  },
  {
    path: 'address',
    component: AddressComponent
  },
  {
    path: '**',
    redirectTo: 'tabs/home',
  },
];
