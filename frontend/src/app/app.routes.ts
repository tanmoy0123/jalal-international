import { Routes } from '@angular/router';
import { NotFound } from './component/global/not-found/not-found';
import { Home } from './component/local/home/home';
import { About } from './component/local/about/about';
import { Contact } from './component/local/contact/contact';
import { Services } from './component/local/services/services';
import { Clients } from './component/local/clients/clients';
import { Guideline } from './component/local/guideline/guideline';
import { Media } from './component/local/media/media';

export const routes: Routes = [
  {
    path: 'home',
    component: Home,
    title: 'Home',
  },
  {
    path: 'about',
    component: About,
    title: 'About',
  },
  {
    path: 'services',
    component: Services,
    title: 'Services',
  },
  {
    path: 'clients',
    component: Clients,
    title: 'Clients',
  },
  {
    path: 'guideline',
    component: Guideline,
    title: 'Guidelines',
  },
  {
    path: 'media',
    component: Media,
    title: 'Media',
  },
  {
    path: 'contact',
    component: Contact,
    title: 'Contact',
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: '**',
    component: NotFound,
    title: '404 - Page Not Found',
  },
];
