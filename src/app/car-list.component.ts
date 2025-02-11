import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';  

interface Service {
  part: string;
  cost: string;
}

interface Car {
  name: string;
  model?: string;
  registration?: string;
  services: Service[];
}

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule, RouterModule],  
  template: `
    <h2>Car List</h2>
    <ul style="padding-left: 1cm;"> 
      <li *ngFor="let car of cars; let i = index" (click)="viewDetails(car)">
        {{ i + 1 }}. {{ car.name }} 
        <span *ngIf="car.model && car.registration"> ({{ car.model }}, {{ car.registration }})</span>
        <button (click)="confirmDelete(car, $event)">Delete</button>
      </li>
    </ul>

    <button (click)="exportToCSV()">Export Cars to CSV</button>
  `,
})
export class CarListComponent {
  cars: Car[] = [];

  constructor(private router: Router) {  
    const storedCars = localStorage.getItem('cars');
    if (storedCars) {
      this.cars = JSON.parse(storedCars) as Car[];
    }
  }

  viewDetails(car: Car) {
    this.router.navigate(['/cars', car.name]);  
  }

  confirmDelete(car: Car, event: Event) {
    event.stopPropagation();  
    const confirmed = confirm(`Are you sure you want to delete ${car.name}?`);
    if (confirmed) {
      this.deleteCar(car);
    }
  }

  deleteCar(car: Car) {
    this.cars = this.cars.filter(c => c !== car);
    localStorage.setItem('cars', JSON.stringify(this.cars));
  }

  exportToCSV() {
    let csvData = 'ID;Car Name;Model;Registration;Part;Cost\n';  
    this.cars.forEach((car, index) => {
      const model = car.model || '';  
      const registration = car.registration || '';  
      
      if (car.services.length === 0) {
        csvData += `${index + 1};${car.name};${model};${registration};;\n`;  
      } else {
        car.services.forEach(service => {
          csvData += `${index + 1};${car.name};${model};${registration};${service.part};${service.cost}\n`;
        });
      }
    });
  
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cars.csv';  
    a.click();
    window.URL.revokeObjectURL(url);
  }
}
