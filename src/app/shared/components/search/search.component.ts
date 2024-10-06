import {Component, EventEmitter, Input, Output, signal} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatIconModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  host: {'[class.open]': 'isOpen()'}
})
export class SearchComponent {
  @Input() value = '';
  @Output() valueChange = new EventEmitter<string>();

  isOpen = signal(false);

  onInput(value: string): void {
    this.value = value;
    this.valueChange.emit(value);
  }

  close(): void {
    this.isOpen.set(false);
    this.value = '';
    this.valueChange.emit('');
  }
}
