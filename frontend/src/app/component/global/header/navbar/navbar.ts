import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  navLinks = [
  { label: 'Home', path: '/home', exact: true },
  { label: 'About Us', path: '/about', exact: false },
  { label: 'Services', path: '/services', exact: false },
  { label: 'Clients', path: '/clients', exact: false },
  { label: 'Guideline', path: '/guideline', exact: false },
  { label: 'Media', path: '/media', exact: false },
  { label: 'Contacts', path: '/contact', exact: false }
];

}
