import { I18nPluralPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-twitter-post',
  templateUrl: './twitter-post.component.html',
  styleUrls: ['./twitter-post.component.scss'],
})
export class TwitterPostComponent {
  @Input()
  baseHref = 'https://www.imdsegitim.com';

  @Input()
  hashTags: string[] = [
    'imds',
    'egitim',
    'danismanlik',
    'frontend',
    'web development',
  ];

  constructor(public titleService: Title) {}

  get twitterUrl(): string {
    const base = this.getBaseWithHashTagsAndRoute();
    const message = encodeURIComponent(
      `check out ${this.titleService.getTitle()} and become coder`
    );
    return `${base}${message}`;
  }

  getBaseWithHashTagsAndRoute() {
    const route = encodeURI(this.baseHref);
    const hastTags = this.hashTags.join(',');

    return `https://twitter.com/intent/tweet?hashtags=${encodeURIComponent(
      hastTags
    )}&related=imparatore12&url=${route}&text=`;
  }
}
