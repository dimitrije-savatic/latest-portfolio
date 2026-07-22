import { Component, HostListener, Input, OnInit, inject, signal } from '@angular/core';
import { PersonalInfo, SocialLink } from '../../models/portfolio.model';
import { ScrollSpyService } from '../../services/scroll-spy.service';

interface NavLink {
  id: string;
  label: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  @Input({ required: true }) personal!: PersonalInfo;
  @Input({ required: true }) socials!: SocialLink[];

  private scrollSpy = inject(ScrollSpyService);

  readonly links: NavLink[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  activeSection = this.scrollSpy.activeSection;
  menuOpen = signal(false);
  scrolled = signal(false);

  ngOnInit(): void {
    this.scrollSpy.observeSections(this.links.map((l) => l.id));
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.scrolled.set(window.scrollY > 12);
  }

  navigate(id: string): void {
    this.menuOpen.set(false);
    this.scrollSpy.scrollTo(id);
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  initials(name: string): string {
    return name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  }
}
