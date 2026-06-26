import { Component, computed, signal } from '@angular/core';
export interface GalleryImage {
  readonly id: number;
  readonly title: string;
  readonly category: string;
  readonly imageUrl: string;
  readonly thumbnail: string;
}

export type GalleryCategory =
  | 'All'
  | 'Recruitment'
  | 'Training'
  | 'Events'
  | 'Corporate'
  | 'Clients';

@Component({
  selector: 'app-media',
  imports: [],
  templateUrl: './media.html',
  styleUrl: './media.scss',
})
export class Media {
  activeFilter = signal<GalleryCategory>('All');
  currentPage = signal(1);
  itemsPerPage = 24;

  readonly categories: GalleryCategory[] = [
    'All',
    'Recruitment',
    'Training',
    'Events',
    'Corporate',
    'Clients',
  ];

  readonly galleryImages: GalleryImage[] = Array.from({ length: 120 }, (_, i) => {
    const categories: GalleryCategory[] = [
      'Recruitment',
      'Training',
      'Events',
      'Corporate',
      'Clients',
    ];
    const category = categories[i % categories.length];
    const titles = {
      Recruitment: [
        'Job Fair',
        'Interview Session',
        'Candidate Screening',
        'Recruitment Drive',
        'Hiring Event',
      ],
      Training: [
        'Skills Workshop',
        'Safety Training',
        'Technical Session',
        'Leadership Program',
        'Team Building',
      ],
      Events: [
        'Annual Conference',
        'Networking Event',
        'Award Ceremony',
        'Business Meeting',
        'Cultural Event',
      ],
      Corporate: [
        'Office Opening',
        'Corporate Meeting',
        'Board Meeting',
        'Strategy Session',
        'Team Photo',
      ],
      Clients: [
        'Client Visit',
        'Project Handover',
        'Site Visit',
        'Client Meeting',
        'Partnership Event',
      ],
    };
    const titleList = titles[category as keyof typeof titles] || ['Gallery Image'];
    return {
      id: i + 1,
      title: `${titleList[i % titleList.length]} ${i + 1}`,
      category: category,
      imageUrl: `https://picsum.photos/seed/${i + 100}/600/400`,
      thumbnail: `https://picsum.photos/seed/${i + 100}/400/300`,
    };
  });

  readonly filteredImages = computed(() => {
    const filter = this.activeFilter();
    return filter === 'All'
      ? this.galleryImages
      : this.galleryImages.filter((img) => img.category === filter);
  });

  readonly totalPages = computed(() => {
    return Math.ceil(this.filteredImages().length / this.itemsPerPage);
  });

  readonly paginatedImages = computed(() => {
    const start = (this.currentPage() - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredImages().slice(start, end);
  });

  readonly startIndex = computed(() => {
    return (this.currentPage() - 1) * this.itemsPerPage + 1;
  });

  readonly endIndex = computed(() => {
    const end = this.currentPage() * this.itemsPerPage;
    return Math.min(end, this.filteredImages().length);
  });

  setFilter(category: GalleryCategory): void {
    this.activeFilter.set(category);
    this.currentPage.set(1);
  }

  setPage(page: number): void {
    this.currentPage.set(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  prevPage(): void {
    if (this.currentPage() > 1) {
      this.currentPage.set(this.currentPage() - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  nextPage(): void {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.set(this.currentPage() + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  getPageNumbers(): number[] {
    const total = this.totalPages();
    const current = this.currentPage();
    const pages: number[] = [];

    if (total <= 7) {
      for (let i = 1; i <= total; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (current > 3) pages.push(-1); // Ellipsis

      const start = Math.max(2, current - 1);
      const end = Math.min(total - 1, current + 1);

      for (let i = start; i <= end; i++) {
        if (i > 1 && i < total) pages.push(i);
      }

      if (current < total - 2) pages.push(-1); // Ellipsis
      pages.push(total);
    }

    return pages;
  }
}
