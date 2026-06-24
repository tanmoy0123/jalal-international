import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Service {
  title: string;
  shortDescription: string;
  icon: string;
  image: string;
}

interface Feature {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Services {
  services: Service[] = [
    {
      title: 'Recruitment Services',
      shortDescription:
        'Attracting, shortlisting, selecting and appointing suitable candidates for your organization.',
      icon: 'fas fa-user-plus',
      image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&q=80',
    },
    {
      title: 'Hajj & Umrah',
      shortDescription:
        'Annual Islamic pilgrimage to Mecca and Umrah services with comprehensive support.',
      icon: 'fas fa-kaaba',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80',
    },
    {
      title: 'Air Ticketing',
      shortDescription:
        'Airline reservation systems incorporating fares, schedules, passenger reservations and ticket records.',
      icon: 'fas fa-plane',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80',
    },
    {
      title: 'Manpower Training',
      shortDescription:
        'Training and development programs addressing the growing complexity of the work environment.',
      icon: 'fas fa-chalkboard-teacher',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
    },
    {
      title: 'Air Freight',
      shortDescription:
        'AIRFAST services designed for customers who need their goods delivered urgently.',
      icon: 'fas fa-box',
      image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80',
    },
    {
      title: 'Religious Tour',
      shortDescription:
        'Spiritually-motivated travel, sometimes over long distances, with dedicated pilgrimage packages.',
      icon: 'fas fa-hiking',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80',
    },
  ];

  features: Feature[] = [
    {
      title: 'Industry Expertise',
      description: 'Deep knowledge across sectors to match the right talent with the right roles.',
      icon: 'fas fa-briefcase',
    },
    {
      title: 'Trusted Recruitment',
      description: 'Rigorous screening and selection processes that ensure quality and fit.',
      icon: 'fas fa-handshake',
    },
    {
      title: 'Fast Deployment',
      description: 'Efficient mobilization of workforce to meet your project timelines.',
      icon: 'fas fa-rocket',
    },
    {
      title: 'Global Workforce',
      description: 'Access to a diverse, international talent pool for your business needs.',
      icon: 'fas fa-globe-asia',
    },
  ];
}
