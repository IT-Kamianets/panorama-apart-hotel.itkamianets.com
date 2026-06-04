import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  langService = inject(LanguageService);
  titleService = inject(Title);
  currentLang = this.langService.currentLang;

  constructor() {
    this.titleService.setTitle('Panorama Apart Hotel');
  }

  content: { [key: string]: { [key: string]: string } } = {
    hero_title: {
      uk: 'Затишок як вдома у центрі Кам\'янця-Подільського',
      en: 'Home-like Coziness in the Center of Kamianets-Podilskyi',
      pl: 'Przytulność jak w domu w centrum Kamieńca Podolskiego',
      de: 'Heimelige Gemütlichkeit im Zentrum von Kamjanez-Podilskyj'
    },
    hero_subtitle: {
      uk: 'Ваш ідеальний відпочинок починається тут. Сучасні номери та щира гостинність.',
      en: 'Your perfect vacation starts here. Modern rooms and sincere hospitality.',
      pl: 'Twój idealny wypoczynek zaczyna się tutaj. Nowoczesne pokoje i szczera gościnność.',
      de: 'Ihr idealer Urlaub beginnt hier. Moderne Zimmer und herzliche Gastfreundschaft.'
    },
    cta_book: { uk: 'Бронювати', en: 'Book Now', pl: 'Zarezerwuj teraz', de: 'Jetzt buchen' },
    cta_rooms: { uk: 'Наші номери', en: 'Our Rooms', pl: 'Nasze pokoje', de: 'Unsere Zimmer' },
    cta_gallery: { uk: 'Дивитись фото', en: 'View Photos', pl: 'Zobacz zdjęcia', de: 'Fotos ansehen' },

    // About Section
    about_title: { uk: 'Про наш апарт-готель', en: 'About Our Apart-Hotel', pl: 'O naszym apart-hotelu', de: 'Über unser Apart-Hotel' },
    about_text_1: {
      uk: 'Panorama Apart-Hotel — це місце, де кожен гість відчуває себе як вдома. Ми розташовані в самому серці старовинного Кам\'янця-Подільського, поблизу головних історичних пам\'яток.',
      en: 'Panorama Apart-Hotel is a place where every guest feels at home. We are located in the very heart of ancient Kamianets-Podilskyi, close to the main historical attractions.',
      pl: 'Panorama Apart-Hotel to miejsce, w którym każdy gość czuje się как в domu. Znajdujemy się в samym sercu starożytnego Kamieńca Podolskiego, w pobliżu głównych atrakcji historycznych.',
      de: 'Das Panorama Apart-Hotel ist ein Ort, an dem sich jeder Gast wie zu Hause fühlt. Wir befinden uns im Herzen des alten Kamjanez-Podilskyj, in der Nähe der wichtigsten historischen Sehenswürdigkeiten.'
    },
    about_text_2: {
      uk: 'Ми пропонуємо сучасні, стильні номери з усіма зручностями, щоб ваш відпочинок або робоча поїздка пройшли на найвищому рівні комфорту. Наша мета — подарувати вам найкращі враження та спогади.',
      en: 'We offer modern, stylish rooms with all amenities so that your vacation or business trip is of the highest level of comfort. Our goal is to give you the best impressions and memories.',
      pl: 'Oferujemy nowoczesne, stylowe pokoje ze wszystkimi udogodnieniami, aby Twoje wakacje lub podróż służbowa przebiegły na najwyższym poziomie komfortu. Naszym celem jest zapewnienie najlepszych wrażeń i wspomnień.',
      de: 'Wir bieten moderne, stilvolle Zimmer mit allen Annehmlichkeiten, damit Ihr Urlaub oder Ihre Geschäftsreise auf höchstem Komfortniveau verläuft. Unser Ziel ist es, Ihnen die besten Eindrücke und Erinnerungen zu vermitteln.'
    },
    about_stats_guests: { uk: 'Задоволених гостей', en: 'Happy Guests', pl: 'Zadowolonych gości', de: 'Glückliche Gäste' },
    about_stats_rooms: { uk: 'Затишних номерів', en: 'Cozy Rooms', pl: 'Przytulnych pokoi', de: 'Gemütliche Zimmer' },
    about_stats_location: { uk: 'Хвилин до центру', en: 'Mins to Center', pl: 'Minut do centrum', de: 'Minuten zum Zentrum' },

    // Amenities Section
    amenities_title: { uk: 'Наші переваги', en: 'Our Amenities', pl: 'Nasze zalety', de: 'Unsere Vorteile' },
    amenities_subtitle: {
      uk: 'Все необхідне для вашого комфорту та безтурботного відпочинку',
      en: 'Everything you need for your comfort and carefree relaxation',
      pl: 'Wszystko, czego potrzebujesz dla komfortu i beztroskiego relaksu',
      de: 'Alles was Sie für Ihren Komfort und unbeschwerte Entspannung brauchen'
    },
    amenity_wifi: { uk: 'Швидкісний Wi-Fi', en: 'High-speed Wi-Fi', pl: 'Szybkie Wi-Fi', de: 'Highspeed-Wi-Fi' },
    amenity_wifi_desc: { uk: 'Безкоштовний інтернет у всіх номерах та зонах відпочинку.', en: 'Free internet in all rooms and lounge areas.', pl: 'Darmowy internet we wszystkich pokojach i strefach wypoczynkowych.', de: 'Kostenloses Internet in allen Zimmern und Loungebereichen.' },
    amenity_parking: { uk: 'Безпечний паркінг', en: 'Secure Parking', pl: 'Bezpieczny parking', de: 'Sicherer Parkplatz' },
    amenity_parking_desc: { uk: 'Ваше авто буде в безпеці на нашій території.', en: 'Your car will be safe on our premises.', pl: 'Twój samochód będzie bezpieczny na naszym terenie.', de: 'Ihr Auto ist auf unserem Gelände sicher.' },
    amenity_coffee: { uk: 'Смачна кава', en: 'Delicious Coffee', pl: 'Pyszna kawa', de: 'Köstlicher Kaffee' },
    amenity_coffee_desc: { uk: 'Почніть день з філіжанки ароматної кави або чаю.', en: 'Start your day with a cup of aromatic coffee or tea.', pl: 'Zacznij dzień od filiżanki aromatycznej kawy lub herbaty.', de: 'Beginnen Sie den Tag mit einer Tasse aromatischem Kaffee oder Tee.' },
    amenity_cleaning: { uk: 'Щоденне прибирання', en: 'Daily Cleaning', pl: 'Codzienne sprzątanie', de: 'Tägliche Reinigung' },
    amenity_cleaning_desc: { uk: 'Ідеальна чистота та свіжість у вашому номері щодня.', en: 'Perfect cleanliness and freshness in your room every day.', pl: 'Idealna czystość i świeżość w Twoim pokoju każdego dnia.', de: 'Täglich perfekte Sauberkeit und Frische in Ihrem Zimmer.' }
  };
}
