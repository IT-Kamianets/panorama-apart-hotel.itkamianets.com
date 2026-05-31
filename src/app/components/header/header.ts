import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LanguageService, Language } from '../../services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent implements OnInit {
  private langService = inject(LanguageService);
  currentLang = this.langService.currentLang;
  
  isDarkMode = false;

  labels: { [key: string]: { [key: string]: string } } = {
    home: { uk: 'Головна', en: 'Home', pl: 'Strona główna', de: 'Startseite' },
    rooms: { uk: 'Номери', en: 'Rooms', pl: 'Pokoje', de: 'Zimmer' },
    gallery: { uk: 'Галерея', en: 'Gallery', pl: 'Galeria', de: 'Galerie' },
    contact: { uk: 'Контакти', en: 'Contacts', pl: 'Kontakty', de: 'Kontakte' },
    book: { uk: 'Бронювати', en: 'Book Now', pl: 'Zarezerwuj', de: 'Buchen' },
    more: { uk: 'Ще', en: 'More', pl: 'Więcej', de: 'Mehr' }
  };

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDarkMode = true;
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }

  onLangChange(event: Event) {
    const lang = (event.target as HTMLSelectElement).value as Language;
    this.langService.setLanguage(lang);
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    const theme = this.isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
}
