import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Corrected property name
  standalone: false
})

export class AppComponent {
  title = 'codecanvas';
}
