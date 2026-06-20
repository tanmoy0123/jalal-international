import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  subscribe(): void {
    // Handle newsletter subscription logic
    console.log('Newsletter subscription submitted!');
    // Example: Call an API service to subscribe the user
    // this.newsletterService.subscribe(email).subscribe(...);
  }
}
