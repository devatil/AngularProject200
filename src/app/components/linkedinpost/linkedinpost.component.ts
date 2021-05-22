import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-linkedinpost',
  templateUrl: './linkedinpost.component.html',
  styleUrls: ['./linkedinpost.component.scss'],
})
export class LinkedinpostComponent {
  constructor(private router: Router) {}

  get linkedinMessage() {
    const base = 'https://www.linkedin.com/shareArticles?mini=true';
    const currentSite = `&url=https://www.google.com${this.router.url}`;
    return `${base}${currentSite}`;
  }
}
