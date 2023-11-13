import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-two-side',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './two-side.component.html'
})
export class TwoSideComponent {

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  close() {
    this.router.navigate([{outlets: {side: null}}], { relativeTo: this.route.parent}).then();
  }
}
