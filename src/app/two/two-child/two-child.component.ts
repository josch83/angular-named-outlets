import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-two-child',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './two-child.component.html'
})
export class TwoChildComponent {

}
