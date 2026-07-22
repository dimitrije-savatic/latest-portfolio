import { Component, Input } from '@angular/core';
import { ServiceItem } from '../../models/portfolio.model';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';
import { IconComponent, IconName } from '../shared/icon/icon.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RevealOnScrollDirective, IconComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  @Input({ required: true }) services!: ServiceItem[];

  /** Icons mapped in the same order services appear in portfolio.json; falls back to 'layers'. */
  private iconSequence: IconName[] = ['globe', 'server', 'code', 'layers', 'database', 'check-circle'];

  iconFor(index: number): IconName {
    return this.iconSequence[index % this.iconSequence.length];
  }
}
