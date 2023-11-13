import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-one-side',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './one-side.component.html'
})
export class OneSideComponent {

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  close() {
    this.router.navigate([{outlets: {side: null}}], { relativeTo: this.route.parent}).then();
  }
}
