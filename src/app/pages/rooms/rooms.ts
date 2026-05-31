import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';

interface Room {
  id: string;
  type: { [key: string]: string };
  description: { [key: string]: string };
  features: { [key: string]: string[] };
  folder: string; 
  images: string[]; 
  price: number;
  capacity: number;
  hasPrivateBathroom: boolean;
}

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './rooms.html',
  styleUrl: './rooms.css'
})
export class RoomsComponent {
  langService = inject(LanguageService);
  currentLang = this.langService.currentLang;

  isModalOpen = false;
  selectedRoom: Room | null = null;
  activeModalIndex = 0;

  labels: { [key: string]: { [key: string]: string } } = {
    title: { uk: 'Наші номери', en: 'Our Rooms', pl: 'Nasze pokoje', de: 'Unsere Zimmer' },
    subtitle: { uk: 'Оберіть ідеальний варіант для вашого відпочинку.', en: 'Choose the perfect option for your stay.', pl: 'Wybierz idealną opcję na swój pobyt.', de: 'Wählen Sie die perfekte Option für Ihren Aufenthalt.' },
    book_now: { uk: 'Бронювати', en: 'Book Now', pl: 'Zarezerwuj teraz', de: 'Jetzt buchen' },
    amenities: { uk: 'Зручності', en: 'Amenities', pl: 'Udogodnienia', de: 'Ausstattung' },
    capacity: { uk: 'Осіб', en: 'Capacity', pl: 'Osoby', de: 'Kapazität' },
    currency: { uk: 'грн/ніч', en: 'UAH/night', pl: 'UAH/noc', de: 'UAH/Nacht' },
    private_bath: { uk: 'Власна ванна', en: 'Private bath', pl: 'Prywatna łazienka', de: 'Privatbad' },
    shared_bath: { uk: 'Спільна ванна', en: 'Shared bath', pl: 'Wspólna łazienka', de: 'Gemeinschaftsbad' }
  };

  rooms: Room[] = [
    {
      id: 'room-1', folder: 'room1', images: ['1.png', '2.png', '3.png', '4.png'],
      type: { uk: 'Тримісний номер Делюкс з душем', en: 'Triple Deluxe Room with Shower', pl: 'Trzyosobowy pokój Deluxe z prysznicem', de: 'Dreibettzimmer Deluxe mit Dusche' },
      description: { uk: 'Просторий делюкс для трьох осіб з сучасним душем та преміальним комфортом.', en: 'Spacious deluxe for three people with a modern shower and premium comfort.', pl: 'Przestronny pokój deluxe dla trzech osób z nowoczesnym prysznicem i najwyższym комфортом.', de: 'Geräumiges Deluxe für drei Personen mit moderner Dusche und erstklassigem Komfort.' },
      features: { uk: ['Кондиціонер', 'Smart TV', 'Wi-Fi', 'Холодильник'], en: ['AC', 'Smart TV', 'Wi-Fi', 'Fridge'], pl: ['Klimatyzacja', 'Smart TV', 'Wi-Fi', 'Lodówka'], de: ['Klimaanlage', 'Smart TV', 'Wi-Fi', 'Kühlschrank'] },
      price: 1800, capacity: 3, hasPrivateBathroom: true
    },
    {
      id: 'room-2', folder: 'room2', images: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png'],
      type: { uk: 'Чотиримісний номер з власною ванною кімнатою', en: 'Quadruple Room with Private Bathroom', pl: 'Pokój czteroosobowy z prywatną łazienką', de: 'Vierbettzimmer mit privatem Badezimmer' },
      description: { uk: 'Ідеальний варіант для сім\'ї або компанії з чотирьох осіб.', en: 'Ideal for a family or a group of four people.', pl: 'Idealny dla rodziny lub grupy czterech osób.', de: 'Ideal für eine Familie oder eine Gruppe von vier Personen.' },
      features: { uk: ['Власна ванна', 'Wi-Fi', 'Телевізор', 'Фен'], en: ['Private bath', 'Wi-Fi', 'TV', 'Hairdryer'], pl: ['Prywatna łazienka', 'Wi-Fi', 'Telewizor', 'Susзarka'], de: ['Privatbad', 'Wi-Fi', 'Fernseher', 'Föhn'] },
      price: 2200, capacity: 4, hasPrivateBathroom: true
    },
    {
      id: 'room-3', folder: 'room3', images: ['1.png', '2.png', '3.png', '4.png', '5.png'],
      type: { uk: 'Чотиримісний номер', en: 'Quadruple Room', pl: 'Pokój czteroosobowy', de: 'Vierbettzimmer' },
      description: { uk: 'Комфортний та світлий номер для розміщення чотирьох гостей.', en: 'Comfortable and bright room for accommodating four guests.', pl: 'Komфортовий і ясний pokój для чотирьох осіб.', de: 'Komfortables und helles Zimmer für vier Gäste.' },
      features: { uk: ['4 окремих ліжка', 'Wi-Fi', 'Шафа для одягу'], en: ['4 single beds', 'Wi-Fi', 'Wardrobe'], pl: ['4 łóżka pojedyncze', 'Wi-Fi', 'Szafa'], de: ['4 Einzelbetten', 'Wi-Fi', 'Kleiderschrank'] },
      price: 1600, capacity: 4, hasPrivateBathroom: false
    },
    {
      id: 'room-4', folder: 'room4', images: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png'],
      type: { uk: 'Сімейний номер з власною ванною кімнатою', en: 'Family Room with Private Bathroom', pl: 'Pokój rodzinny z prywatną łazienką', de: 'Familienzimmer mit privatem Badezimmer' },
      description: { uk: 'Великий сімейний номер з усіма зручностями та власною ванною.', en: 'Large family room with all amenities and private bathroom.', pl: 'Duży pokój rodzinny ze wszystкими udogodnieniami i prywatną łazienką.', de: 'Großes Familienzimmer mit allen Annehmlichkeiten und eigenem Badezimmer.' },
      features: { uk: ['Дитяче ліжко (за запитом)', 'Кондиціонер', 'Власна ванна'], en: ['Baby cot (on request)', 'AC', 'Private bath'], pl: ['Łóżeczko dziecięce (na życzenie)', 'Klimatyzacja', 'Prywatna łazienka'], de: ['Babybett (auf Anfrage)', 'Klimaanlage', 'Privatbad'] },
      price: 2400, capacity: 4, hasPrivateBathroom: true
    },
    {
      id: 'room-5', folder: 'room5', images: ['1.png', '2.png', '3.png', '4.png', '5.png'],
      type: { uk: 'Сімейний номер зі спільною ванною кімнатою', en: 'Family Room with Shared Bathroom', pl: 'Pokój rodzinny ze wspólną łazienką', de: 'Familienzimmer mit Gemeinschaftsbad' },
      description: { uk: 'Затишний сімейний номер. Зручності розташовані на поверсі.', en: 'Cozy family room. Amenities are located on the floor.', pl: 'Приtulний pokój rodzinny. Udogodnienia znajdują się na korytarzu.', de: 'Gemütliches Familienzimmer. Die Annehmlichkeiten befinden sich auf der Etage.' },
      features: { uk: ['Економ варіант', 'Wi-Fi', 'Спільний душ'], en: ['Economy option', 'Wi-Fi', 'Shared shower'], pl: ['Opcja ekonomiczna', 'Wi-Fi', 'Wspólny prysznic'], de: ['Economy-Option', 'Wi-Fi', 'Gemeinschaftsdusche'] },
      price: 1400, capacity: 4, hasPrivateBathroom: false
    },
    {
      id: 'room-6', folder: 'room6', images: ['1.png', '2.png', '3.png'],
      type: { uk: 'Ліжко в 6-місному загальному номері', en: 'Bed in 6-Bed Mixed Dormitory', pl: 'Łóżко в pokoju 6-osobowym', de: 'Bett in einem 6-Bett-Schlafsaal' },
      description: { uk: 'Бюджетний варіант для подорожуючих. Спільний номер для чоловіків та жінок.', en: 'Budget option for travelers. Mixed dormitory for men and women.', pl: 'Opcja budżetowa dla podróżnych. Pokój wieloosobowy dla kobiet i mężczyzn.', de: 'Budget-Option für Reisende. Gemischter Schlafsaal für Männer und Frauen.' },
      features: { uk: ['Локери', 'Wi-Fi', 'Розетка біля ліжка'], en: ['Lockers', 'Wi-Fi', 'Power socket near bed'], pl: ['Szafki zamykane', 'Wi-Fi', 'Gniazdko przy łóżku'], de: ['Schließfächer', 'Wi-Fi', 'Steckdose am Bett'] },
      price: 450, capacity: 1, hasPrivateBathroom: false
    },
    {
      id: 'room-7', folder: 'room7', images: ['1.png', '2.png', '3.png', '4.png'],
      type: { uk: 'Сімейний номер', en: 'Family Room', pl: 'Pokój rodzinny', de: 'Familienzimmer' },
      description: { uk: 'Стандартний сімейний номер для комфортного відпочинку.', en: 'Standard family room for comfortable stay.', pl: 'Стандартний pokój rodzinny на комфортний побут.', de: 'Standard-Familienzimmer für einen komfortablen Aufenthalt.' },
      features: { uk: ['Wi-Fi', 'Телевізор', 'Шафа'], en: ['Wi-Fi', 'TV', 'Wardrobe'], pl: ['Wi-Fi', 'Telewizor', 'Szafa'], de: ['Wi-Fi', 'Fernseher', 'Schrank'] },
      price: 2000, capacity: 4, hasPrivateBathroom: false
    }
  ];

  openGallery(room: Room, index: number = 0) {
    this.selectedRoom = room;
    this.activeModalIndex = index;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden'; 
  }

  closeModal() {
    this.isModalOpen = false;
    document.body.style.overflow = 'auto';
  }

  modalNext(event: Event) {
    event.stopPropagation();
    if (!this.selectedRoom) return;
    this.activeModalIndex = (this.activeModalIndex + 1) % this.selectedRoom.images.length;
  }

  modalPrev(event: Event) {
    event.stopPropagation();
    if (!this.selectedRoom) return;
    this.activeModalIndex = this.activeModalIndex === 0 ? this.selectedRoom.images.length - 1 : this.activeModalIndex - 1;
  }
}
