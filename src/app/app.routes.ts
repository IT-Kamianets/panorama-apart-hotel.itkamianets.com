import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { GalleryComponent } from './pages/gallery/gallery';
import { ContactComponent } from './pages/contact/contact';
import { RoomsComponent } from './pages/rooms/rooms';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
