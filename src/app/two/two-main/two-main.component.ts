import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-two-main',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './two-main.component.html'
})
export class TwoMainComponent {

}
