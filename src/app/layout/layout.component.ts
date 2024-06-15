import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'] // Correct property name
})
export class LayoutComponent {
  test = (params:any) => {
    alert(`passed Variable :${params}`)
  }
}
