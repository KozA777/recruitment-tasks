import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <h1>Car Management System</h1>
    <nav>
      <a routerLink="/cars">Car List</a> |
      <a routerLink="/add-car">Add Car</a> 
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}

