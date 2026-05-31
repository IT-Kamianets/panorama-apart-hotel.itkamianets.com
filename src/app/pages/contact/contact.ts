import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {
  langService = inject(LanguageService);
  currentLang = this.langService.currentLang;

  name = '';
  phone = '';
  loading = signal(false);
  success = signal(false);
  error = signal(false);

  labels: { [key: string]: { [key: string]: string } } = {
    title: { uk: 'Зв\'яжіться з нами', en: 'Contact Us', pl: 'Skontaktuj się з nami', de: 'Kontaktieren Sie uns' },
    subtitle: {
      uk: 'Ми завжди раді допомогти вам з бронюванням або відповісти на ваші запитання.',
      en: 'We are always happy to help you with booking or answer your questions.',
      pl: 'Zawsze chętnie pomożemy w rezerwacji lub odpowiemy na Twoje pytania.',
      de: 'Wir helfen Ihnen gerne bei der Buchung oder beantworten Ihre Fragen.'
    },
    address_label: { uk: 'Адреса', en: 'Address', pl: 'Adres', de: 'Adresse' },
    address_value: {
      uk: 'вул. Зарванська, 5Б, Старе місто, Кам\'янець-Подільський',
      en: '5B Zarvanska St, Old Town, Kamianets-Podilskyi',
      pl: 'ul. Zarwańska 5B, Stare Miasto, Kamieniec Podolski',
      de: 'Zarwanska-Str. 5B, Altstadt, Kamjanez-Podilskyj'
    },
    phone: { uk: 'Телефон', en: 'Phone', pl: 'Telefon', de: 'Telefon' },
    phone_value: { uk: '+380 97 474 4562', en: '+380 97 474 4562', pl: '+380 97 474 4562', de: '+380 97 474 4562' },
    email: { uk: 'Електронна пошта', en: 'Email', pl: 'E-mail', de: 'E-Mail' },
    email_value: { uk: 'info@example.com', en: 'info@example.com', pl: 'info@example.com', de: 'info@example.com' },
    form_title: { uk: 'Напишіть нам', en: 'Send us a message', pl: 'Napisz do nas', de: 'Schreiben Sie uns' },
    form_name: { uk: 'Ваше ім\'я', en: 'Your Name', pl: 'Twoje imię', de: 'Ihr Name' },
    form_name_placeholder: { uk: 'Іван Іваненко', en: 'John Doe', pl: 'Jan Kowalski', de: 'Max Mustermann' },
    form_phone: { uk: 'Номер телефону', en: 'Phone Number', pl: 'Numer telefonu', de: 'Telefonnummer' },
    form_phone_placeholder: { uk: '+380 XX XXX XX XX', en: '+380 XX XXX XX XX', pl: '+380 XX XXX XX XX', de: '+380 XX XXX XX XX' },
    form_submit: { uk: 'Відправити', en: 'Send Message', pl: 'Wyślij', de: 'Senden' },
    form_sending: { uk: 'Надсилання...', en: 'Sending...', pl: 'Wysyłanie...', de: 'Senden...' },
    form_success: { uk: 'Повідомлення надіслано! Ми зв\'яжемось з вами найближчим часом.', en: 'Message sent! We will contact you shortly.', pl: 'Wiadomość wysłana! Skontaktujemy się wkrótce.', de: 'Nachricht gesendet! Wir melden uns bald.' },
    form_error: { uk: 'Помилка надсилання. Спробуйте ще раз.', en: 'Failed to send. Please try again.', pl: 'Błąd wysyłania. Spróbuj ponownie.', de: 'Fehler beim Senden. Bitte erneut versuchen.' },
    success_title: { uk: 'Дякуємо за звернення!', en: 'Thank you!', pl: 'Dziękujemy!', de: 'Vielen Dank!' },
    success_text: { uk: 'Ваш запит прийнято. Ми зв\'яжемося з вами найближчим часом.', en: 'Your request has been received. We will contact you shortly.', pl: 'Twoje zgłoszenie zostało przyjęte. Skontaktujemy się wkrótce.', de: 'Ihre Anfrage wurde empfangen. Wir melden uns in Kürze.' },
    open_map: { uk: 'Відкрити на мапі', en: 'Open on map', pl: 'Otwórz na mapie', de: 'Auf der Karte öffnen' }
  };

  onSubmit(event: Event) {
    event.preventDefault();
    this.loading.set(true);
    this.success.set(false);
    this.error.set(false);

    const message = `📩 Нова заявка з сайту Panorama Apart-Hotel\n👤 Ім'я: ${this.name}\n📞 Телефон: ${this.phone}`;

    fetch('https://it.webart.work/api/telegram/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug: 'panorama-apart-hotel', message })
    })
      .then(() => {
        this.loading.set(false);
        this.success.set(true);
        this.name = '';
        this.phone = '';
      })
      .catch(() => {
        this.loading.set(false);
        this.error.set(true);
      });
  }

  scrollToMap() {
    const mapElement = document.getElementById('footer-map');
    if (mapElement) {
      mapElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
