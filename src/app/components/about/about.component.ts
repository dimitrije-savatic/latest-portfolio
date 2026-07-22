import { Component, Input } from '@angular/core';
import { PersonalInfo } from '../../models/portfolio.model';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';
import { IconComponent } from '../shared/icon/icon.component';

interface Highlight {
  icon: 'code' | 'server' | 'graduation-cap';
  title: string;
  text: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealOnScrollDirective, IconComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  @Input({ required: true }) personal!: PersonalInfo;

  readonly highlights: Highlight[] = [
    {
      icon: 'graduation-cap',
      title: 'Internet Technologies student',
      text: 'Final-year student building a strong foundation in web systems and software engineering.',
    },
    {
      icon: 'code',
      title: 'Frontend craftsmanship',
      text: 'Comfortable across Angular, TypeScript, Bootstrap and modern responsive UI patterns.',
    },
    {
      icon: 'server',
      title: 'Backend & data',
      text: 'Builds server-side logic and APIs with Laravel and PHP, backed by relational databases.',
    },
  ];
}
