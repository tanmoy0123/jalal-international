import { Component, OnInit, OnDestroy, Input, ChangeDetectorRef } from '@angular/core';

import { CommonModule, NgClass } from '@angular/common';
import { Hero } from './hero/hero';

@Component({
  selector: 'app-home',
  imports: [CommonModule, Hero],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  clients = [
    {
      id: 1,
      name: 'BDCC',
      logo: 'https://i.pinimg.com/1200x/23/95/fe/2395fe20fb0f8128224feb1c1422940b.jpg',
    },
    {
      id: 2,
      name: 'Tamimi',
      logo: 'https://i.pinimg.com/1200x/39/67/57/396757db9f321f930220da1f26b42b9d.jpg',
    },
    {
      id: 3,
      name: 'AMS',
      logo: 'https://i.pinimg.com/1200x/32/0d/9f/320d9f991e417508dc9ef46113664b03.jpg',
    },
    {
      id: 4,
      name: 'Zahran',
      logo: 'https://i.pinimg.com/1200x/5e/be/29/5ebe2975a8caeebed10737b64ec29664.jpg',
    },
    {
      id: 5,
      name: 'Client 5',
      logo: 'https://i.pinimg.com/1200x/84/45/bc/8445bcb90eea6e51b8374d0b27913f8f.jpg',
    },
    {
      id: 6,
      name: 'Client 6',
      logo: 'https://i.pinimg.com/1200x/1a/d9/cf/1ad9cf874efe1ff3622199a65ae537cf.jpg',
    },
  ];

  groupCompanies = [
    {
      id: 1,
      name: 'JALAL SUPERMARKET',
      category: 'Retail',
      description: 'Leading supermarket chain offering quality products at competitive prices.',
      icon: 'fas fa-store',
      size: 'large',
      featured: true,
    },
    {
      id: 2,
      name: 'SPEXXO LTD',
      category: 'Technology',
      description: 'Innovative tech solutions and IT services provider.',
      icon: 'fas fa-laptop-code',
      size: '',
      featured: false,
    },
    {
      id: 3,
      name: 'BEST Inn HOTEL',
      category: 'Hospitality',
      description: 'Premium hotel services with exceptional comfort and luxury.',
      icon: 'fas fa-hotel',
      size: '',
      featured: false,
    },
    {
      id: 4,
      name: 'AL AROUBA MEDICAL CENTER',
      category: 'Healthcare',
      description: 'Comprehensive medical care with state-of-the-art facilities.',
      icon: 'fas fa-heartbeat',
      size: '',
      featured: false,
    },
    {
      id: 5,
      name: 'WORLD HORIZON MEDICAL CENTER',
      category: 'Healthcare',
      description: 'Advanced healthcare services with international standards.',
      icon: 'fas fa-hospital',
      size: '',
      featured: false,
    },
    {
      id: 6,
      name: 'AL YADAN MEDICAL CENTER',
      category: 'Healthcare',
      description: 'Specialized medical care with patient-centered approach.',
      icon: 'fas fa-stethoscope',
      size: 'large',
      featured: false,
    },
    {
      id: 7,
      name: 'UPOSHOM HOSPITAL',
      category: 'Healthcare',
      description: 'Multi-specialty hospital providing world-class treatment.',
      icon: 'fas fa-clinic-medical',
      size: 'large',
      featured: false,
    },
    {
      id: 8,
      name: 'JALAL AIR INTERNATIONAL',
      category: 'Aviation',
      description: 'International air services and aviation solutions.',
      icon: 'fas fa-plane',
      size: '',
      featured: false,
    },
    {
      id: 9,
      name: 'AL FAHAM RESTAURANT',
      category: 'Food & Beverage',
      description: 'Authentic culinary experiences with diverse cuisines.',
      icon: 'fas fa-utensils',
      size: '',
      featured: false,
    },
  ];
}
