import { Component, Input } from '@angular/core';
import { ExperienceEntry } from '../../models/portfolio.model';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';
import { IconComponent } from '../shared/icon/icon.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RevealOnScrollDirective, IconComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  @Input({ required: true }) experience!: ExperienceEntry[];
}
