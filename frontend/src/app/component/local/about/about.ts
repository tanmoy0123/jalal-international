import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

export interface Milestone {
  readonly year: string;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
}

export interface CoreValue {
  readonly title: string;
  readonly description: string;
  readonly icon: string;
}

export interface Stat {
  readonly value: string;
  readonly label: string;
  readonly icon: string;
}

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  readonly stats: Stat[] = [
    { value: '25+', label: 'Years of Experience', icon: 'fas fa-calendar-alt' },
    { value: '10K+', label: 'Professionals Placed', icon: 'fas fa-users' },
    { value: '500+', label: 'Partner Companies', icon: 'fas fa-building' },
    { value: '98%', label: 'Client Satisfaction', icon: 'fas fa-star' },
  ];

  readonly coreValues: CoreValue[] = [
    {
      title: 'Integrity',
      description:
        'We operate with complete transparency and honesty in every client and candidate interaction.',
      icon: 'fas fa-shield-alt',
    },
    {
      title: 'Excellence',
      description:
        'Our rigorous screening ensures only the most qualified professionals represent your brand.',
      icon: 'fas fa-award',
    },
    {
      title: 'Global Reach',
      description:
        'Deep networks across Bangladesh and the Middle East, with a focus on Saudi Arabia.',
      icon: 'fas fa-globe-asia',
    },
    {
      title: 'Long-Term Partnership',
      description:
        'We build lasting relationships, not just placements — your success is our mission.',
      icon: 'fas fa-handshake',
    },
  ];

  readonly milestones: Milestone[] = [
    {
      year: '1998',
      title: 'Founded in Dhaka',
      description:
        'Jalal Overseas International was established with a vision to connect skilled Bangladeshi workers with opportunities in the Middle East.',
      icon: 'fas fa-flag',
    },
    {
      year: '2003',
      title: 'Sector Expansion',
      description:
        'Expanded beyond construction into healthcare, hospitality, and engineering recruitment across Saudi Arabia.',
      icon: 'fas fa-expand-arrows-alt',
    },
    {
      year: '2008',
      title: 'BAIRA Membership',
      description:
        'Became a proud member of the Bangladesh Association of International Recruiting Agencies, strengthening our global network.',
      icon: 'fas fa-certificate',
    },
    {
      year: '2015',
      title: '5,000 Placements',
      description:
        'Crossed the milestone of 5,000 successful professional placements, cementing our reputation as a trusted agency.',
      icon: 'fas fa-users',
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description:
        'Modernized our recruitment processes with digital screening tools, improving deployment speed and accuracy.',
      icon: 'fas fa-digital-tachograph',
    },
    {
      year: '2024',
      title: 'Industry Leader',
      description:
        "Recognized as one of Bangladesh's leading international recruitment agencies with 10,000+ successful placements.",
      icon: 'fas fa-trophy',
    },
  ];
}
