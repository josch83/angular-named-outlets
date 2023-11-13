import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-one-main',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './one-main.component.html'
})
export class OneMainComponent {

}
