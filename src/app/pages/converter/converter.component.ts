import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.scss'
})
export class ConverterComponent {
  //Egenskaper
  meter: number | null = null;
  feet: number | null = null;
  celsius: number | null = null;
  fahrenheit: number | null = null;

  //Metoder
  convertToFeet(): void {
    if(this.meter != null) {
      this.feet = Number((this.meter * 3.28084).toFixed(2));
    }
  }

  convertToMeter(): void {
    if(this.feet != null) {
      this.meter = Number((this.feet * 0.3048).toFixed(2));
    }
  }
  
  convertToFahrenheit(): void {
    if(this.celsius != null) {
      this.fahrenheit = Number(((this.celsius * 9/5) + 32).toFixed(2));
    }
  }

  convertToCelsius(): void {
    if(this.fahrenheit != null) {
      this.celsius = Number(((this.fahrenheit - 32) * 5/9).toFixed(2));
    }
  }
}
