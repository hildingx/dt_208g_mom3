import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  codeImgWebp: string = "/assets/img/codeImg.webp";
  codeImgJpg: string = "/assets/img/codeImg.jpg";
}
