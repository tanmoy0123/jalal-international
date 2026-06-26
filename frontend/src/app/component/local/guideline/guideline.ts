import { Component, signal } from '@angular/core';

export interface ProcessStep {
  readonly number: number;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
}

@Component({
  selector: 'app-guideline',
  imports: [],
  templateUrl: './guideline.html',
  styleUrl: './guideline.scss',
})
export class Guideline {
  readonly recruitmentSteps: ProcessStep[] = [
    {
      number: 1,
      title: 'Receiving Demand Letter',
      description:
        'Receive demand letter from company / Agent with detailed requirements for manpower.',
      icon: 'fa-file-signature',
    },
    {
      number: 2,
      title: 'Define Job Requirements',
      description:
        'The Bangladeshi recruiting agency collects the job requirements from the international recruiting company and defines the job profile.',
      icon: 'fa-clipboard-list',
    },
    {
      number: 3,
      title: 'Create Job Description',
      description:
        'Develop comprehensive job descriptions outlining roles, responsibilities, and qualifications needed.',
      icon: 'fa-file-alt',
    },
    {
      number: 4,
      title: 'Sourcing Candidates',
      description:
        'Source candidates through multiple channels including online portals, databases, and referrals.',
      icon: 'fa-users',
    },
    {
      number: 5,
      title: 'Initial Interview',
      description:
        'Conduct initial interviews to assess candidate suitability and communication skills.',
      icon: 'fa-comments',
    },
    {
      number: 6,
      title: 'Candidate Shortlisting',
      description:
        'Shortlist the most qualified candidates for further evaluation and client review.',
      icon: 'fa-check-double',
    },
    {
      number: 7,
      title: 'Reference Checks',
      description:
        'Verify candidate credentials and work history through professional reference checks.',
      icon: 'fa-phone-alt',
    },
    {
      number: 8,
      title: 'Technical Interview',
      description:
        'Conduct technical interviews to assess specialized skills and job-specific competencies.',
      icon: 'fa-laptop-code',
    },
    {
      number: 9,
      title: 'Final Selection',
      description:
        'Make final selection decisions based on comprehensive evaluation and client feedback.',
      icon: 'fa-award',
    },
  ];

  readonly selectionSteps: ProcessStep[] = [
    {
      number: 1,
      title: 'Define Job Requirements',
      description:
        'The Bangladeshi recruiting agency collects the job requirements from the international recruiting company and defines the job profile.',
      icon: 'fa-clipboard-list',
    },
    {
      number: 2,
      title: 'Create a Job Description',
      description:
        'Develop detailed job descriptions that accurately reflect the role and expectations.',
      icon: 'fa-file-alt',
    },
    {
      number: 3,
      title: 'Sourcing Candidates',
      description:
        'Utilize multiple sourcing strategies to attract qualified candidates from diverse channels.',
      icon: 'fa-users',
    },
    {
      number: 4,
      title: 'Initial Interview',
      description:
        'Evaluate candidates through initial screening interviews to identify potential matches.',
      icon: 'fa-comments',
    },
    {
      number: 5,
      title: 'Candidate Shortlisting',
      description:
        'Filter and shortlist candidates based on qualifications, experience, and cultural fit.',
      icon: 'fa-check-double',
    },
    {
      number: 6,
      title: 'Reference Checks',
      description:
        'Conduct thorough background verification and reference checks on shortlisted candidates.',
      icon: 'fa-phone-alt',
    },
    {
      number: 7,
      title: 'Technical Interview',
      description:
        'Assess technical capabilities through in-depth interviews with subject matter experts.',
      icon: 'fa-laptop-code',
    },
    {
      number: 8,
      title: 'Final Selection',
      description:
        'Make the final selection decision based on all evaluation metrics and client requirements.',
      icon: 'fa-award',
    },
    {
      number: 9,
      title: 'Job Offer and Acceptance',
      description:
        'Present competitive job offers and manage the acceptance process with selected candidates.',
      icon: 'fa-handshake',
    },
    {
      number: 10,
      title: 'Onboarding',
      description:
        'Facilitate smooth onboarding including documentation, training, and integration.',
      icon: 'fa-user-plus',
    },
  ];

  readonly guaranteePoints: string[] = [
    'Video conferencing facilities for clients unable to physically interview candidates',
    'Full guarantee on selected candidates with rigorous selection procedures',
    'Only top-grade candidates sent to clients',
    'Timely deployment with booked flights and client communication',
    'Strict adherence to client deployment schedules',
  ];

  activeTab = signal<'recruitment' | 'selection'>('recruitment');

  setTab(tab: 'recruitment' | 'selection'): void {
    this.activeTab.set(tab);
  }
}
