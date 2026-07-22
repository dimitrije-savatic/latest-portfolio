import { Component, Input } from '@angular/core';
import { SkillGroups } from '../../models/portfolio.model';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';
import { IconComponent, IconName } from '../shared/icon/icon.component';

interface SkillCategory {
  title: string;
  icon: IconName;
  items: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RevealOnScrollDirective, IconComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  categories: SkillCategory[] = [];

  @Input({ required: true })
  set skills(value: SkillGroups) {
    this.categories = [
      { title: 'Frontend', icon: 'code', items: value.frontend },
      { title: 'Backend', icon: 'server', items: value.backend },
      { title: 'Databases', icon: 'database', items: value.databases },
      { title: 'Tools & Platforms', icon: 'layers', items: value.tools },
      { title: 'Cloud & Other', icon: 'cloud', items: [...value.cloud, ...value.other] },
    ];
  }
}
