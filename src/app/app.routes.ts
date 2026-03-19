import { Routes } from '@angular/router';
import { TabsComponent } from './pages/tabs/tabs.component';
import { HomeComponent } from './pages/tabs/home/home.component';
import { SearchComponent } from './pages/tabs/search/search.component';
import { CartComponent } from './pages/tabs/cart/cart.component';
import { AccountComponent } from './pages/tabs/account/account.component';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsComponent
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
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
  }
  
];
