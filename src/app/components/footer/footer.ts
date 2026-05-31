import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class FooterComponent {
  langService = inject(LanguageService);
  currentLang = this.langService.currentLang;

  labels: { [key: string]: { [key: string]: string } } = {
    address: {
      uk: 'вул. Зарванська, 5Б, Старе місто, Кам\'янець-Подільський',
      en: '5B Zarvanska St, Old Town, Kamianets-Podilskyi',
      pl: 'ul. Zarwańska 5B, Stare Miasto, Kamieniec Podolski',
      de: 'Zarwanska-Str. 5B, Altstadt, Kamjanez-Podilskyj'
    },
    rights: {
      uk: 'Всі права захищено.',
      en: 'All rights reserved.',
      pl: 'Wszelkie prawa zastrzeżone.',
      de: 'Alle Rechte vorbehalten.'
    },
    nav: { uk: 'Навігація', en: 'Navigation', pl: 'Nawigacja', de: 'Navigation' },
    home: { uk: 'Головна', en: 'Home', pl: 'Strona główna', de: 'Startseite' },
    rooms: { uk: 'Номери', en: 'Rooms', pl: 'Pokoje', de: 'Zimmer' },
    gallery: { uk: 'Галерея', en: 'Gallery', pl: 'Galeria', de: 'Galerie' },
    contact: { uk: 'Контакти', en: 'Contacts', pl: 'Kontakty', de: 'Kontakte' }
  };
}
