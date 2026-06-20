import { Component, OnInit, signal } from '@angular/core';
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
export class App implements OnInit {
  ngOnInit(): void {
    this.aos();
  }
  protected readonly title = signal('frontend');
  private aos(): void {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }
}
