import {inject, Injectable} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class IconService {
  private readonly matIconRegistry = inject(MatIconRegistry);
  private readonly domSanitizer = inject(DomSanitizer);

  registerSvgIcons(): void {
    [
      'add_icon',
      'delete_icon',
      'edit_icon',
      'search_icon',
      'close_icon'
    ].forEach(icon => this.matIconRegistry.addSvgIcon(
      icon,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`${icon}.svg`)
    ));
  }
}
