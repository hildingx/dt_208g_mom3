import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.scss'
})
export class ConverterComponent {
  //Egenskaper
  meter: number | null = null;
  feet: number | null = null;
  meterResult: number | null = null;
  feetResult: number | null = null;
  celsius: number | null = null;
  fahrenheit: number | null = null;
  celResult: number | null = null;
  fahResult: number | null = null;

  //Metoder
  convertToFeet(): void {
    //Om meter inte är null
    if(this.meter != null) {
      //Beräkna fot och avrunda till två decimaler
      this.feetResult = Number((this.meter * 3.28084).toFixed(2));
    } else {
      this.feetResult = null;
    }
  }

  convertToMeter(): void {
    if(this.feet != null) {
      this.meterResult = Number((this.feet * 0.3048).toFixed(2));
    } else {
      this.meterResult = null;
    }
  }
  
  convertToFahrenheit(): void {
    if(this.celsius != null) {
      this.fahResult = Number(((this.celsius * 9/5) + 32).toFixed(2));
    } else {
      this.fahResult = null;
    }
  }

  convertToCelsius(): void {
    if(this.fahrenheit != null) {
      this.celResult = Number(((this.fahrenheit - 32) * 5/9).toFixed(2));
    } else {
      this.celResult = null;
    }
  }
}
