import { Component, Input } from '@angular/core';
import { Project } from '../../models/portfolio.model';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';
import { IconComponent } from '../shared/icon/icon.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RevealOnScrollDirective, IconComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  @Input({ required: true }) projects!: Project[];

  /** Tracks which project images failed to load so a neumorphic placeholder can take over. */
  brokenImages = new Set<number>();

  onImageError(projectId: number): void {
    this.brokenImages.add(projectId);
  }

  initials(name: string): string {
    return name
      .split(' ')
      .map((word) => word[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  }
}
