import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

export interface BreadcrumbItem {
  readonly label: string;
  readonly link?: string;
}

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  readonly breadcrumbs: BreadcrumbItem[] = [
    { label: 'Al-Mojeel International', link: '/' },
    { label: 'About Us' },
  ];

  readonly aboutParagraphs: string[] = [
    'Al-Mojeel International is a leading international recruiting agency that specializes in exporting Bangladeshi manpower worldwide, specifically for Kingdom of Saudi Arabia. With years of experience in the industry, we have successfully placed thousands of skilled professionals in various industries across Kingdom of Saudi Arabia.',
    'We understand that finding the right talent for your business can be a daunting task. That is why we offer a wide range of recruitment services tailored to meet your specific needs. Our team of experienced recruiters works closely with both clients and candidates to ensure a smooth recruitment process.',
    "At Al-Mojeel International, we believe in providing our clients with quality talent that not only meets but exceeds their expectations. We have a rigorous screening process that ensures only the most qualified candidates are selected. Our team of recruiters conducts extensive interviews and background checks to verify the candidate's skills and experience.",
    'Our expertise in the recruitment industry has allowed us to successfully place professionals in various sectors, including construction, healthcare, hospitality, engineering, and many more. We are committed to finding the right candidate for your business, regardless of the industry.',
    'We also understand the importance of time and money, which is why we offer cost-effective and time-efficient recruitment solutions. Our services are designed to help our clients save both time and money while finding the perfect candidate for their business.',
    'At Al-Mojeel International, we believe in building long-term relationships with our clients. Our team of dedicated recruiters is always available to provide support and guidance throughout the recruitment process.',
  ];

  readonly historyParagraphs: string[] = [
    "Al-Mojeel International was established in 1998 in Dhaka, Bangladesh, with the aim of providing recruitment services to the Middle East, specifically to Kingdom of Saudi Arabia. The company's founder, Mrs. Jahanara Begum, had a vision of creating a company that would help connect employers with skilled Bangladeshi workers and provide them with better job opportunities.",
    'In its early years, Al-Mojeel International focused on recruiting workers for the construction industry in Kingdom of Saudi Arabia. As the company gained more experience and expertise in the recruitment industry, it expanded its services to other sectors, such as healthcare, hospitality, and engineering.',
    "Over the years, Al Mojeel International has built a reputation for providing quality recruitment services to its clients. The company's team of experienced recruiters has successfully placed thousands of skilled professionals in various industries across Saudi Arabia.",
    'Al-Mojeel International is a member of the Bangladesh Association of International Recruiting Agencies (BAIRA), which is the apex trade body of the recruiting agencies in Bangladesh. This membership has helped the company to establish a network of recruiters and clients both locally and internationally.',
    "Today, Al-Mojeel International is recognized as one of the leading recruitment agencies in Bangladesh. The company's commitment to providing quality recruitment services and building long-term relationships with its clients has made it a preferred choice among employers in Kingdom of Saudi Arabia and beyond.",
    'As Al-Mojeel International continues to grow and expand its services, it remains dedicated to its core values of integrity, transparency, and excellence in all aspects of its business operations.',
    'If you are looking for a reliable and experienced recruitment agency to help you find the right talent for your business in Saudi Arabia, look no further than Al Mojeel International. Contact us today to learn more about our recruitment services.',
  ];

  /**
   * Wraps known brand/org names in a <mark> span for green highlight styling.
   * Called via [innerHTML] binding in the template.
   */
  highlight(text: string): string {
    const terms: string[] = [
      'Al-Mojeel International',
      'Al Mojeel International',
      'Bangladesh Association of International Recruiting Agencies (BAIRA)',
      'Kingdom of Saudi Arabia',
    ];
    let result = text;
    for (const term of terms) {
      const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      result = result.replace(new RegExp(`(${escaped})`, 'g'), '<mark class="brand">$1</mark>');
    }
    return result;
  }
}
