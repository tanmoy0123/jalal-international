import { Component, signal } from '@angular/core';

export interface Testimonial {
  readonly quote: string;
  readonly name: string;
  readonly role: string;
  readonly company: string;
  readonly avatar: string;
}

export interface Client {
  readonly name: string;
  readonly logo: string;
  readonly category: string;
}

export type FilterCategory =
  | 'All'
  | 'Construction'
  | 'Healthcare'
  | 'Hospitality'
  | 'Engineering'
  | 'Trading';

@Component({
  selector: 'app-clients',
  imports: [],
  templateUrl: './clients.html',
  styleUrl: './clients.scss',
})
export class Clients {
  activeTestimonial = signal(0);
  activeFilter = signal<FilterCategory>('All');

  readonly filterCategories: FilterCategory[] = [
    'All',
    'Construction',
    'Healthcare',
    'Hospitality',
    'Engineering',
    'Trading',
  ];

  readonly testimonials: Testimonial[] = [
    {
      quote:
        'Jalal Overseas International has helped us recruit skilled professionals in the engineering and hospitality industries. Their team is very responsive and always provides us with high-quality candidates that meet our specific requirements. We appreciate their personalized approach to recruitment and their commitment to providing quality services.',
      name: 'Ahmed Al-Rashidi',
      role: 'HR Director',
      company: 'Saudi Medical System',
      avatar:
        'https://ui-avatars.com/api/?name=Ahmed+Al-Rashidi&background=198754&color=fff&size=64',
    },
    {
      quote:
        'We have been partnering with Jalal Overseas International for over 8 years. Their understanding of our industry requirements and their ability to source skilled Bangladeshi talent for our construction projects has been outstanding. They are a truly reliable partner.',
      name: 'Khalid Al-Mansouri',
      role: 'Operations Manager',
      company: 'Saudi Tools Contracting Company',
      avatar:
        'https://ui-avatars.com/api/?name=Khalid+Al-Mansouri&background=16385f&color=fff&size=64',
    },
    {
      quote:
        'The quality of candidates sourced through Jalal Overseas International is consistently exceptional. Their thorough screening process saves us time and ensures we get professionals who are ready to contribute from day one. Highly recommended.',
      name: 'Fatima Al-Zahrani',
      role: 'General Manager',
      company: 'Millennium Hotels & Resorts',
      avatar:
        'https://ui-avatars.com/api/?name=Fatima+Al-Zahrani&background=198754&color=fff&size=64',
    },
  ];

  readonly clients: Client[] = [
    {
      name: 'ABCON',
      logo: 'https://placehold.co/160x80/f8f9fa/16385f?text=ABCON',
      category: 'Construction',
    },
    {
      name: 'Famous Group',
      logo: 'https://placehold.co/160x80/f8f9fa/198754?text=Famous+Group',
      category: 'Trading',
    },
    {
      name: 'AMS',
      logo: 'https://placehold.co/160x80/f8f9fa/16385f?text=AMS',
      category: 'Engineering',
    },
    {
      name: 'Marh',
      logo: 'https://placehold.co/160x80/f8f9fa/198754?text=Marh',
      category: 'Trading',
    },
    {
      name: 'Shalfa',
      logo: 'https://placehold.co/160x80/f8f9fa/16385f?text=Shalfa',
      category: 'Construction',
    },
    {
      name: 'WSA',
      logo: 'https://placehold.co/160x80/f8f9fa/198754?text=WSA',
      category: 'Engineering',
    },
    {
      name: 'TCC',
      logo: 'https://placehold.co/160x80/f8f9fa/16385f?text=TCC',
      category: 'Trading',
    },
    {
      name: 'BDCC',
      logo: 'https://placehold.co/160x80/f8f9fa/198754?text=BDCC',
      category: 'Construction',
    },
    {
      name: 'Al-Qussie INTL',
      logo: 'https://placehold.co/160x80/f8f9fa/16385f?text=Al-Qussie+INTL',
      category: 'Trading',
    },
    {
      name: 'Al Manar Arabian',
      logo: 'https://placehold.co/160x80/f8f9fa/198754?text=Al+Manar+Arabian',
      category: 'Construction',
    },
    {
      name: 'Saudi Tools Contracting',
      logo: 'https://placehold.co/160x80/f8f9fa/16385f?text=Saudi+Tools',
      category: 'Construction',
    },
    {
      name: 'National Works Co.',
      logo: 'https://placehold.co/160x80/f8f9fa/198754?text=National+Works',
      category: 'Engineering',
    },
    {
      name: 'Millennium Hotels',
      logo: 'https://placehold.co/160x80/f8f9fa/16385f?text=Millennium',
      category: 'Hospitality',
    },
    {
      name: 'Al-Fath Al-Khaleji',
      logo: 'https://placehold.co/160x80/f8f9fa/198754?text=Al-Fath',
      category: 'Construction',
    },
    {
      name: 'Bin Delamah Contracting',
      logo: 'https://placehold.co/160x80/f8f9fa/16385f?text=Bin+Delamah',
      category: 'Construction',
    },
    {
      name: 'SRACO',
      logo: 'https://placehold.co/160x80/f8f9fa/198754?text=SRACO',
      category: 'Engineering',
    },
    {
      name: 'Deen Sen',
      logo: 'https://placehold.co/160x80/f8f9fa/16385f?text=Deen+Sen',
      category: 'Trading',
    },
    {
      name: 'Medad Al Awlaa',
      logo: 'https://placehold.co/160x80/f8f9fa/198754?text=Medad+Al+Awlaa',
      category: 'Trading',
    },
    {
      name: 'KS Medical',
      logo: 'https://placehold.co/160x80/f8f9fa/16385f?text=KS+Medical',
      category: 'Healthcare',
    },
    {
      name: 'Sahara',
      logo: 'https://placehold.co/160x80/f8f9fa/198754?text=Sahara',
      category: 'Construction',
    },
    {
      name: 'Khozz Hilady Est.',
      logo: 'https://placehold.co/160x80/f8f9fa/16385f?text=Khozz+Hilady',
      category: 'Trading',
    },
    {
      name: 'Zahran',
      logo: 'https://placehold.co/160x80/f8f9fa/198754?text=Zahran',
      category: 'Construction',
    },
    {
      name: 'HSH Company',
      logo: 'https://placehold.co/160x80/f8f9fa/16385f?text=HSH',
      category: 'Engineering',
    },
    {
      name: 'Tender Emirates',
      logo: 'https://placehold.co/160x80/f8f9fa/198754?text=Tender+Emirates',
      category: 'Trading',
    },
    {
      name: 'AlSuwaket',
      logo: 'https://placehold.co/160x80/f8f9fa/16385f?text=AlSuwaket',
      category: 'Construction',
    },
    {
      name: 'Saudi Medical System',
      logo: 'https://placehold.co/160x80/f8f9fa/198754?text=Saudi+Medical',
      category: 'Healthcare',
    },
  ];

  get filteredClients(): Client[] {
    const filter = this.activeFilter();
    return filter === 'All' ? this.clients : this.clients.filter((c) => c.category === filter);
  }

  setTestimonial(index: number): void {
    this.activeTestimonial.set(index);
  }

  setFilter(category: FilterCategory): void {
    this.activeFilter.set(category);
  }

  prevTestimonial(): void {
    const current = this.activeTestimonial();
    this.activeTestimonial.set(current === 0 ? this.testimonials.length - 1 : current - 1);
  }

  nextTestimonial(): void {
    const current = this.activeTestimonial();
    this.activeTestimonial.set((current + 1) % this.testimonials.length);
  }
}
