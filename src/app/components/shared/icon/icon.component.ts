import { Component, Input } from '@angular/core';

export type IconName =
  | 'github'
  | 'linkedin'
  | 'mail'
  | 'map-pin'
  | 'download'
  | 'external-link'
  | 'arrow-right'
  | 'code'
  | 'server'
  | 'database'
  | 'layers'
  | 'cloud'
  | 'briefcase'
  | 'graduation-cap'
  | 'send'
  | 'check-circle'
  | 'terminal'
  | 'globe';

@Component({
  selector: 'app-icon',
  standalone: true,
  templateUrl: './icon.component.html',
})
export class IconComponent {
  @Input({ required: true }) name!: IconName;
  @Input() size = 18;
}
