import { Component, Input, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PersonalInfo, SocialLink } from '../../models/portfolio.model';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';
import { IconComponent, IconName } from '../shared/icon/icon.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, RevealOnScrollDirective, IconComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  @Input({ required: true }) personal!: PersonalInfo;
  @Input({ required: true }) socials!: SocialLink[];

  private fb = new FormBuilder();

  form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  submitted = signal(false);

  /**
   * No backend is wired up yet — this simulates a successful send so the
   * form's UX can be reviewed end to end. Swap this for a real HTTP call
   * (e.g. to an email API or serverless function) when one is available.
   */
  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitted.set(true);
    this.form.reset();
  }

  isInvalid(controlName: 'name' | 'email' | 'message'): boolean {
    const control = this.form.get(controlName);
    return !!control && control.invalid && (control.touched || control.dirty);
  }

  iconFor(name: string): IconName {
    const key = name.toLowerCase();
    if (key.includes('github')) return 'github';
    if (key.includes('linkedin')) return 'linkedin';
    return 'globe';
  }
}
