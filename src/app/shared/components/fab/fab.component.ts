import {Component, Input} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-fab',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './fab.component.html',
  styleUrl: './fab.component.scss'
})
export class FabComponent {
  @Input() text = '';
}
