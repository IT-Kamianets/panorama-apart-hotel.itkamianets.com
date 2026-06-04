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
      id: 'room-1', folder: 'room1', images: ['/images/rooms/room1/1.png', '/images/rooms/room1/2.png', '/images/rooms/room1/3.png', '/images/rooms/room1/4.png'],
      type: { uk: 'Апартаменти з терасою', en: 'Apartment with Terrace', pl: 'Apartament z tarasem', de: 'Apartment mit Terrasse' },
      description: { uk: 'Чудові апартаменти з двома окремими спальнями та власною терасою для незабутнього відпочинку.', en: 'Wonderful apartments with two separate bedrooms and a private terrace for an unforgettable stay.', pl: 'Wspaniałe apartamenty z dwiema oddzielnymi sypialniami i prywatnym tarasem na niezapomniany pobyt.', de: 'Wunderbare Apartments mit zwei separaten Schlafzimmern und einer privaten Terrasse für einen unvergesslichen Aufenthalt.' },
      features: { uk: ['Спальня 1: 2 односпальних ліжка', 'Спальня 2: 1 двоспальне ліжко', 'Кондиціонер', 'Smart TV', 'Wi-Fi'], en: ['Bedroom 1: 2 single beds', 'Bedroom 2: 1 double bed', 'AC', 'Smart TV', 'Wi-Fi'], pl: ['Sypialnia 1: 2 łóżka pojedyncze', 'Sypialnia 2: 1 łóżko podwójne', 'Klimatyzacja', 'Smart TV', 'Wi-Fi'], de: ['Schlafzimmer 1: 2 Einzelbetten', 'Schlafzimmer 2: 1 Doppelbett', 'Klimaanlage', 'Smart TV', 'Wi-Fi'] },
      price: 2600, capacity: 4, hasPrivateBathroom: true
    },
    {
      id: 'room-2', folder: 'room2', images: ['/images/rooms/room2/1.png', '/images/rooms/room2/2.png', '/images/rooms/room2/3.png', '/images/rooms/room2/4.png', '/images/rooms/room2/5.png'],
      type: { uk: 'Апартаменти (4-місні)', en: 'Apartments (4-bed)', pl: 'Apartamenty (4-osobowe)', de: 'Apartments (4-Bett)' },
      description: { uk: 'Просторі апартаменти для великої компанії, що поєднують затишок та сучасний дизайн.', en: 'Spacious apartments for a large group, combining comfort and modern design.', pl: 'Przestronne apartamenty dla dużej grupy, łączące komfort i nowoczesny design.', de: 'Geräumige Apartments für eine große Gruppe, die Komfort und modernes Design verbinden.' },
      features: { uk: ['2 односпальні ліжка', '1 велике двоспальне ліжко', 'Wi-Fi', 'Телевізор', 'Фен'], en: ['2 single beds', '1 large double bed', 'Wi-Fi', 'TV', 'Hairdryer'], pl: ['2 łóżka pojedyncze', '1 duże łóżko podwójne', 'Wi-Fi', 'Telewizor', 'Suszarka'], de: ['2 Einzelbetten', '1 großes Doppelbett', 'Wi-Fi', 'Fernseher', 'Föhn'] },
      price: 2300, capacity: 4, hasPrivateBathroom: true
    },
    {
      id: 'room-3', folder: 'room3', images: ['/images/rooms/room3/1.png', '/images/rooms/room3/2.png', '/images/rooms/room3/3.png'],
      type: { uk: 'Апартаменти з 1 спальнею', en: '1-Bedroom Apartments', pl: 'Apartamenty z 1 sypialnią', de: '1-Zimmer-Apartments' },
      description: { uk: 'Зручний варіант для трьох осіб з окремою спальною зоною та всіма вигодами.', en: 'A comfortable option for three people with a separate sleeping area and all amenities.', pl: 'Wygodna opcja dla trzech osób z oddzielną częścią sypialną i wszystkimi udogodnieniami.', de: 'Eine komfortable Option für drei Personen mit separatem Schlafbereich und allen Annehmlichkeiten.' },
      features: { uk: ['3 односпальні ліжка', 'Wi-Fi', 'Шафа для одягу', 'Робоче місце'], en: ['3 single beds', 'Wi-Fi', 'Wardrobe', 'Workspace'], pl: ['3 łóżka pojedyncze', 'Wi-Fi', 'Szafa', 'Miejsce do pracy'], de: ['3 Einzelbetten', 'Wi-Fi', 'Kleiderschrank', 'Arbeitsplatz'] },
      price: 1700, capacity: 3, hasPrivateBathroom: true
    },
    {
      id: 'room-4', folder: 'room4', images: ['/images/rooms/room4/1.png', '/images/rooms/room4/2.png', '/images/rooms/room4/3.png', '/images/rooms/room4/4.png', '/images/rooms/room4/5.png'],
      type: { uk: 'Апартаменти', en: 'Apartments', pl: 'Apartamenty', de: 'Apartments' },
      description: { uk: 'Затишні апартаменти, обладнані всім необхідним для комфортного проживання невеликої групи.', en: 'Cozy apartments equipped with everything necessary for a comfortable stay of a small group.', pl: 'Przytulne apartamenty wyposażone we wszystko co niezbędne do komfortowego pobytu małej grupy.', de: 'Gemütliche Apartments, ausgestattet mit allem, was für einen komfortablen Aufenthalt einer kleinen Gruppe erforderlich ist.' },
      features: { uk: ['2 односпальні ліжка', '1 двоспальне ліжко', 'Wi-Fi', 'Телевізор', 'Шафа'], en: ['2 single beds', '1 double bed', 'Wi-Fi', 'TV', 'Wardrobe'], pl: ['2 łóżka pojedyncze', '1 łóżko podwójne', 'Wi-Fi', 'Telewizor', 'Szafa'], de: ['2 Einzelbetten', '1 Doppelbett', 'Wi-Fi', 'Fernseher', 'Schrank'] },
      price: 1900, capacity: 3, hasPrivateBathroom: true
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
