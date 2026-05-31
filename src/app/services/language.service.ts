import { Injectable, signal } from '@angular/core';

export type Language = 'uk' | 'en' | 'pl' | 'de';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLangSignal = signal<Language>('uk');
  
  readonly currentLang = this.currentLangSignal.asReadonly();

  constructor() {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && ['uk', 'en', 'pl', 'de'].includes(savedLang)) {
      this.currentLangSignal.set(savedLang);
    }
  }

  setLanguage(lang: Language) {
    this.currentLangSignal.set(lang);
    localStorage.setItem('language', lang);
  }
}
