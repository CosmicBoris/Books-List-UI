import {Component} from '@angular/core';
import {RouterOutlet, RouterLink} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {SearchComponent} from './shared/components/search/search.component';
import {IconService} from './shared/services/icon.service';
import {BookStore} from './shared/book-store';
import {FabComponent} from "./shared/components/fab/fab.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, SearchComponent, FabComponent, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Books';

  constructor(
    private readonly bookStore: BookStore,
    iconService: IconService
  ) {
    iconService.registerSvgIcons();
  }

  updateSearchFilter(value: string): void {
    this.bookStore.updateFiltersTitle(value);
  }
}
