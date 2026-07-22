import { Component, Input, inject } from '@angular/core';
import { PersonalInfo, SocialLink } from '../../models/portfolio.model';
import { ScrollSpyService } from '../../services/scroll-spy.service';
import { IconComponent, IconName } from '../shared/icon/icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  @Input({ required: true }) personal!: PersonalInfo;
  @Input({ required: true }) socials!: SocialLink[];

  private scrollSpy = inject(ScrollSpyService);

  readonly year = new Date().getFullYear();

  readonly links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  navigate(id: string): void {
    this.scrollSpy.scrollTo(id);
  }

  iconFor(name: string): IconName {
    const key = name.toLowerCase();
    if (key.includes('github')) return 'github';
    if (key.includes('linkedin')) return 'linkedin';
    return 'globe';
  }
}
