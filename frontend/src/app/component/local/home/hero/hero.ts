import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';

export interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle?: string;
  items?: string[];
  description?: string;
  showButton?: boolean;
  color?: string;
  animation?: AnimationType;
}

export type AnimationType = 'fade' | 'slide' | 'zoom' | 'flip' | 'rotate';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit, OnDestroy {
  @Input() animationType: AnimationType = 'slide';
  @Input() interval: number = 2000;

  currentIndex = 0;
  previousIndex = 0;
  direction: 'next' | 'prev' = 'next';

  private timer: any = null;

  slides: HeroSlide[] = [
    {
      id: 1,
      image: 'assets/images/hero/image-1.jpg',
      title: 'OFFICE MANAGEMENT ADMINISTRATIVE, STAFF',
      items: ['MANAGER', 'ACCOUNTANT', 'SECRETARY', 'COMPUTER PROGRAMMER', 'CLERKS'],
      color: 'green',
      animation: 'fade',
    },
    {
      id: 2,
      image: 'assets/images/hero/image-2.jpg',
      subtitle: 'WORKFORCE AVAILABILITY',
      title: 'WELDING SERVICES',
      items: ['Heavy Equipment Welder', 'Patrol Machine', 'Hydrolic Machine'],
      color: 'black',
      animation: 'slide',
    },
    {
      id: 3,
      image: 'assets/images/hero/image-4.jpg',
      title: 'HOTEL & CATERING STAFF',
      items: ['GENERAL MANAGER', 'COOK', 'ASSISTANT COOK', 'WAITER', 'CAPTAIN'],
      color: 'yellow',
      animation: 'rotate',
    },
    {
      id: 4,
      image: 'assets/images/hero/image-5.jpg',
      subtitle: 'WORKFORCE AVAILABILITY',
      title: 'HVAC',
      items: [
        'HVAC Engineer',
        'Electric Engineer',
        'Ziron Machine',
        'Insulator Worker',
        'Duct Worker',
      ],
      color: 'red',
      animation: 'flip',
    },
    {
      id: 5,
      image: 'assets/images/hero/image-3.jpeg',
      title: '',
      description:
        'Al Mojeel International is a leading international recruiting agency that specializes in exporting Bangladeshi manpower worldwide.',
      showButton: true,
      color: 'blue',
      animation: 'zoom',
    },
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    console.log('Slider initialized with interval:', this.interval);
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  startAutoplay(): void {
    this.stopAutoplay(); // Clear any existing timer first
    this.timer = setInterval(() => {
      this.next();
      this.cdr.detectChanges();
    }, this.interval);
  }

  stopAutoplay(): void {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  private next(): void {
    this.direction = 'next';
    this.previousIndex = this.currentIndex;
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  getSlideState(i: number): string {
    if (i === this.currentIndex) return 'active';
    if (i === this.previousIndex && this.previousIndex !== this.currentIndex) {
      return this.direction === 'next' ? 'leaving-left' : 'leaving-right';
    }
    return 'inactive';
  }

  getCurrentAnimation(): string {
    return 'anim-' + this.slides[this.currentIndex].animation;
  }
}
