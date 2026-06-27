import { Component, NgModule, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

export interface Office {
  readonly name: string;
  readonly type: 'international' | 'bangladesh';
  readonly address: string;
  readonly phone: string;
  readonly email: string;
  readonly icon: string;
  readonly isMain?: boolean;
}

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  isSubmitting = signal(false);
  isSuccess = signal(false);

  readonly offices: Office[] = [
    {
      name: 'Dammam Office, Saudi Arabia',
      type: 'international',
      address: 'Al Hammam commercial centre, 2nd Floor, Room No-10, Al Badiya, Dammam',
      phone: '+966 54 567 6804',
      email: 'jalalint612@gmail.com',
      icon: 'fa-building',
    },
    {
      name: 'Riyadh Office, Saudi Arabia',
      type: 'international',
      address: 'Al Murabba, Jabor Bin Rashid Road, Riyadh',
      phone: '+966 55 025 0225',
      email: 'jalalint612@gmail.com',
      icon: 'fa-city',
    },
    {
      name: 'Head Office',
      type: 'bangladesh',
      address: '2/C, Shawon Tower (11th floor), Purana Paltan, Dhaka, Bangladesh',
      phone: '+880 1753 020101',
      email: 'jalalint612@gmail.com',
      icon: 'fa-flag',
      isMain: true,
    },
    {
      name: 'Corporate Office',
      type: 'bangladesh',
      address: 'House: 99, Road: 13, Block: D, Banani, Dhaka-1213',
      phone: '+880 1753 020101',
      email: 'jalalint612@gmail.com',
      icon: 'fa-briefcase',
    },
  ];

  readonly contactInfo = {
    email: 'jalalint612@gmail.com',
    phone: '+880 1753 020101',
  };

  submitForm(): void {
    this.isSubmitting.set(true);
    // Simulate API call
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.isSuccess.set(true);
      // Reset success message after 5 seconds
      setTimeout(() => {
        this.isSuccess.set(false);
      }, 5000);
    }, 1500);
  }
}
