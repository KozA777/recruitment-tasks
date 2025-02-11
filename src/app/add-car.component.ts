import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-car',
  standalone: true,
  template: `
    <h2>Add New Car</h2>
    <button (click)="addCar()">Add Car</button>
    <br/><br/>
    <button (click)="goBackToHome()" class="btn btn-secondary">Back to Home</button>
  `,
})
export class AddCarComponent {
  cars: any[] = [];

  constructor(private router: Router) {
    const storedCars = localStorage.getItem('cars');
    if (storedCars) {
      this.cars = JSON.parse(storedCars);
    }
  }

  addCar() {
    const carName = prompt('Enter car name:');
    const carModel = prompt('Enter car model:');
    const carRegistration = prompt('Enter car registration number:');
    if (carName && carModel && carRegistration) {
      this.cars.push({ name: carName, model: carModel, registration: carRegistration, services: [] });
      localStorage.setItem('cars', JSON.stringify(this.cars));
    }
  }

  goBackToHome() {
    this.router.navigate(['/']); 
  }
}
