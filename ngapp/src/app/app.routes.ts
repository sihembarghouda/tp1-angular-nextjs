
import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Contact } from './pages/contact/contact';
import { About } from './pages/about/about';
import { Products } from './pages/products/products';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'contact', component: Contact },
  { path: 'about', component: About },
  { path: 'products', component: Products },
  { path: '**', redirectTo: '' }
];
