import { AfterViewInit, Component, HostListener, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './component/global/header/header';
import { Footer } from './component/global/footer/footer';
declare var AOS: any;
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements AfterViewInit, OnDestroy {
  protected readonly title = signal('frontend');
  private mouseMoveListener!: (e: MouseEvent) => void;
  isShowScrollTopBtn = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const yOffset = window.pageYOffset || document.documentElement.scrollTop;
    this.isShowScrollTopBtn = yOffset > 300;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  ngAfterViewInit(): void {
    const dot = document.getElementById('cursor-dot');
    const outline = document.getElementById('cursor-outline');

    this.mouseMoveListener = (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;

      requestAnimationFrame(() => {
        if (dot && outline) {
          dot.style.transform = `translate(calc(${posX}px - 50%), calc(${posY}px - 50%))`;
          outline.style.transform = `translate(calc(${posX}px - 50%), calc(${posY}px - 50%))`;
        }
      });
    };

    window.addEventListener('mousemove', this.mouseMoveListener);
  }

  ngOnDestroy(): void {
    if (this.mouseMoveListener) {
      window.removeEventListener('mousemove', this.mouseMoveListener);
    }
  }
}
