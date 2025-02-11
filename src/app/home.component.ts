import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <h2>Welcome to the Car Management System</h2>
    <p>Select "Car List" to view your cars or "Add Car" to add a new one.</p>
  `,
})
export class HomeComponent {}
