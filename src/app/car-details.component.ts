import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Car Details: {{ carName }}</h2>
    <ul>
      <li *ngFor="let service of car.services; let i = index">
        Part: {{ service.part }} - Cost: {{ service.cost }}
        <button (click)="removeService(i)">Remove</button>
      </li>
    </ul>
    <button (click)="addService()">Add Service</button>
    <br/><br/>
    <button (click)="goBackToHome()">Back to Home</button>
  `,
})
export class CarDetailsComponent {
  carName: string | null = '';
  car: any = { services: [] };

  constructor(private route: ActivatedRoute, private router: Router) {
    this.carName = this.route.snapshot.paramMap.get('name');
    const storedCars = localStorage.getItem('cars');
    if (storedCars && this.carName) {
      const cars = JSON.parse(storedCars);
      this.car = cars.find((c: any) => c.name === this.carName) || { services: [] };
    }
  }

  addService() {
    const part = prompt('Enter part name:');
    const cost = prompt('Enter cost:');
    if (part && cost) {
      this.car.services.push({ part, cost });
      const storedCars = JSON.parse(localStorage.getItem('cars') || '[]');
      const carIndex = storedCars.findIndex((c: any) => c.name === this.carName);
      if (carIndex !== -1) {
        storedCars[carIndex] = this.car;
        localStorage.setItem('cars', JSON.stringify(storedCars));
      }
    }
  }

  removeService(index: number) {
    this.car.services.splice(index, 1); 
    const storedCars = JSON.parse(localStorage.getItem('cars') || '[]');
    const carIndex = storedCars.findIndex((c: any) => c.name === this.carName);
    if (carIndex !== -1) {
      storedCars[carIndex] = this.car;
      localStorage.setItem('cars', JSON.stringify(storedCars));
    }
  }

  goBackToHome() {
    this.router.navigate(['/']); 
  }
}
