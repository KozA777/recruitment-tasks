import { Routes } from '@angular/router';
import { CarListComponent } from './car-list.component';
import { CarDetailsComponent } from './car-details.component';
import { AddCarComponent } from './add-car.component';
import { HomeComponent } from './home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cars', component: CarListComponent },
  { path: 'cars/:name', component: CarDetailsComponent },
  { path: 'add-car', component: AddCarComponent }
]