import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-site-header',
  standalone: true,
  templateUrl: './site-header.html',
  styleUrl: './site-header.css',
})
export class SiteHeader {
  readonly menuOpen = signal(false);
  readonly scrolled = signal(false);

  readonly links = [
    { label: 'Services', href: '#services' },
    { label: 'How we work', href: '#model' },
    { label: 'Work', href: '#portfolio' },
    { label: 'Clients', href: '#clients' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 24);
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
