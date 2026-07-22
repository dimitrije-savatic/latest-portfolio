import { Component, Input, inject } from '@angular/core';
import { PersonalInfo, SocialLink } from '../../models/portfolio.model';
import { ScrollSpyService } from '../../services/scroll-spy.service';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';
import { IconComponent, IconName } from '../shared/icon/icon.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RevealOnScrollDirective, IconComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  @Input({ required: true }) personal!: PersonalInfo;
  @Input({ required: true }) socials!: SocialLink[];

  private scrollSpy = inject(ScrollSpyService);

  readonly coreTech = ['PHP', 'Laravel', 'JavaScript', 'TypeScript', 'Angular'];

  goTo(id: string): void {
    this.scrollSpy.scrollTo(id);
  }

  iconFor(name: string): IconName {
    const key = name.toLowerCase();
    if (key.includes('github')) return 'github';
    if (key.includes('linkedin')) return 'linkedin';
    return 'globe';
  }
}
