import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-prev-button',
  standalone: true,
  imports: [],
  templateUrl: './prev-button.component.html',
  styleUrl: './prev-button.component.css'
})
export class PrevButtonComponent {
  @Input() class = '';
}
