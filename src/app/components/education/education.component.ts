import { Component, Input } from '@angular/core';
import { EducationEntry } from '../../models/portfolio.model';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';
import { IconComponent } from '../shared/icon/icon.component';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [RevealOnScrollDirective, IconComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  @Input({ required: true }) education!: EducationEntry[];
}
