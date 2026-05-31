import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class GalleryComponent {
  langService = inject(LanguageService);
  currentLang = this.langService.currentLang;

  // Exact files found in public/images/gallery
  images: string[] = [
    'gallery_1.png', 'gallery_2.png', 'gallery_3.png', 
    'gallery_4.png', 'gallery_5.png', 'gallery_6.png', 
    'gallery_7.png', 'gallery_8.png', 'gallery_9.png',
    'gallery_10.png', 'gallery_11.png', 'gallery_12.png',
    'gallery_13.png'
  ];

  labels: { [key: string]: { [key: string]: string } } = {
    title: { uk: 'Галерея готелю', en: 'Hotel Gallery', pl: 'Galeria hotelu', de: 'Hotelgalerie' },
    subtitle: { 
      uk: 'Відчуйте атмосферу затишку та комфорту через наші фото.', 
      en: 'Feel the atmosphere of coziness and comfort through our photos.',
      pl: 'Poczuj atmosferę przytulności i komfortu dzięki нашим zdjęciom.',
      de: 'Spüren Sie die Atmosphäre von Gemütlichkeit und Komfort durch unsere Fotos.'
    }
  };

  isModalOpen = false;
  activeIndex = 0;

  openGallery(index: number) {
    this.activeIndex = index;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isModalOpen = false;
    document.body.style.overflow = 'auto';
  }

  next(event: Event) {
    event.stopPropagation();
    this.activeIndex = (this.activeIndex + 1) % this.images.length;
  }

  prev(event: Event) {
    event.stopPropagation();
    this.activeIndex = this.activeIndex === 0 ? this.images.length - 1 : this.activeIndex - 1;
  }

  onOverlayClick() {
    this.closeModal();
  }
}
