import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  inject,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
}

interface PortfolioItem {
  title: string;
  region: string;
  description: string;
  image: string;
  href: string;
  tag: string;
}

interface TechItem {
  name: string;
  blurb: string;
  icon: string;
  tone: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit, OnDestroy {
  private readonly host = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  readonly formSubmitted = signal(false);
  readonly contact = {
    name: '',
    email: '',
    company: '',
    message: '',
  };

  readonly engagement = [
    {
      step: '01',
      title: 'Discover',
      copy: 'Workshops to capture goals, users, and constraints — even when the idea starts non-technical.',
    },
    {
      step: '02',
      title: 'Architect',
      copy: 'Clear product scope, stack choices, AI opportunities, and a phased roadmap to MVP.',
    },
    {
      step: '03',
      title: 'Build',
      copy: 'Design + engineering in short cycles with demos, Cursor/Claude-accelerated delivery, and QA.',
    },
    {
      step: '04',
      title: 'Launch & grow',
      copy: 'Deploy, monitor, iterate, and support — many clients stay 2+ years as their product scales.',
    },
  ];

  readonly businessModel = [
    {
      title: 'Fixed-scope MVP',
      copy: 'Defined features, timeline, and budget for first launch.',
    },
    {
      title: 'Dedicated squad',
      copy: 'Ongoing product team for roadmap, AI features, and maintenance.',
    },
    {
      title: 'Commission platforms',
      copy: 'Marketplace builds where your business earns per successful transaction.',
    },
  ];

  readonly services = [
    {
      title: 'AI Product Engineering',
      copy: 'Ship intelligent features that read documents, extract meaning, and match the right data — not just chat wrappers.',
      icon: '✦',
    },
    {
      title: 'End-to-End SaaS',
      copy: 'From discovery to launch: multi-tenant apps, dashboards, billing flows, and reliable cloud architecture.',
      icon: '◎',
    },
    {
      title: 'Architecture That Scales',
      copy: 'Clean Nest/Node backends, modular frontends, and systems designed for growth without costly rewrites.',
      icon: '⬡',
    },
    {
      title: 'Idea → Execution',
      copy: 'We translate non-technical visions into clickable products with clear milestones and production-ready quality.',
      icon: '→',
    },
    {
      title: 'Digital Marketing',
      copy: 'Conversion-focused websites, SEO foundations, and campaign-ready funnels that support product growth.',
      icon: '◈',
    },
    {
      title: 'AI-Accelerated Delivery',
      copy: 'Our team builds with Cursor and Claude to move faster — more features, tighter feedback loops, higher quality.',
      icon: '⚡',
    },
  ];

  readonly technologies: TechItem[] = [
    {
      name: 'Angular',
      blurb: 'Enterprise web apps',
      icon: 'assets/tech/angular.svg',
      tone: '#FDECEC',
    },
    {
      name: 'React',
      blurb: 'Modern UI systems',
      icon: 'assets/tech/react.svg',
      tone: '#EAF8FE',
    },
    {
      name: 'Node.js',
      blurb: 'APIs & services',
      icon: 'assets/tech/nodejs.svg',
      tone: '#EAF7EE',
    },
    {
      name: 'NestJS',
      blurb: 'Scalable backends',
      icon: 'assets/tech/nestjs.svg',
      tone: '#FDE8EE',
    },
    {
      name: 'Odoo',
      blurb: 'ERP & business apps',
      icon: 'assets/tech/odoo.svg',
      tone: '#F3ECF2',
    },
    {
      name: 'TypeScript',
      blurb: 'Typed codebases',
      icon: 'assets/tech/typescript.svg',
      tone: '#E8F1FB',
    },
    {
      name: 'Tailwind CSS',
      blurb: 'Fast UI delivery',
      icon: 'assets/tech/tailwind.svg',
      tone: '#E7F7FD',
    },
    {
      name: 'Material',
      blurb: 'Design systems',
      icon: 'assets/tech/material.svg',
      tone: '#E7F4F2',
    },
    {
      name: 'Figma',
      blurb: 'Product design',
      icon: 'assets/tech/figma.svg',
      tone: '#F4F0FF',
    },
    {
      name: 'AI / LLM',
      blurb: 'Document intelligence',
      icon: 'assets/tech/ai.svg',
      tone: '#E8F4F2',
    },
    {
      name: 'Socket.IO',
      blurb: 'Realtime sync',
      icon: 'assets/tech/socketio.svg',
      tone: '#F0F0F0',
    },
    {
      name: 'Digital Marketing',
      blurb: 'Growth & SEO',
      icon: 'assets/tech/marketing.svg',
      tone: '#FDECE9',
    },
  ];

  readonly team: TeamMember[] = [
    {
      name: 'Samir Makhani',
      role: 'CEO / CTO',
      image: 'assets/team/samir-makhani.png',
      linkedin: 'https://www.linkedin.com/in/samir-makhani-2492b3a4/',
    },
    {
      name: 'Karina Andani Makhani',
      role: 'CEO',
      image: 'assets/team/karina-makhani.png',
      linkedin: 'https://www.linkedin.com/in/karina-andani-makhani-8a4990367/',
    },
    {
      name: 'Manthan Bhatti',
      role: 'Technical Lead',
      image: 'assets/team/manthan-bhatti.png',
      linkedin: 'https://www.linkedin.com/in/manthann-bhatti/',
    },
    {
      name: 'Akil Makhani',
      role: 'Senior Developer',
      image: 'assets/team/akil-makhani.png',
      linkedin: 'https://www.linkedin.com/in/akil-makhani-974a6a153/',
    },
  ];

  readonly portfolio: PortfolioItem[] = [
    {
      title: 'Kinnect',
      region: 'USA',
      description: 'Net-worth intelligence with live network maps and AI assistance.',
      image: 'assets/portfolio/kinnect.png',
      href: 'https://app.kinnect.us/',
      tag: 'SaaS',
    },
    {
      title: 'WhyDonate',
      region: 'Global',
      description: 'High-conversion fundraising with trust-first donation journeys.',
      image: 'assets/portfolio/whydonate.png',
      href: 'https://whydonate.com',
      tag: 'Platform',
    },
    {
      title: 'Packie',
      region: 'Australia',
      description: 'Shipping software for retailers — automation and delivery ops.',
      image: 'assets/portfolio/packie.png',
      href: 'https://packie.co/home',
      tag: 'Logistics',
    },
    {
      title: 'Packie NZ',
      region: 'New Zealand',
      description: 'Localized Packie experience for NZ couriers and brands.',
      image: 'assets/portfolio/packie-nz.png',
      href: 'https://packie.co.nz/home',
      tag: 'Logistics',
    },
    {
      title: 'Packie Freight',
      region: 'iOS',
      description: 'Native freight workflow for teams managing shipments on the go.',
      image: 'assets/portfolio/packie-ios.png',
      href: 'https://apps.apple.com/in/app/packie-freight/id6760806586',
      tag: 'Mobile',
    },
    {
      title: 'Sensestek',
      region: 'Singapore',
      description: 'Blockchain and IoT statistics dashboard with live insight.',
      image: 'assets/portfolio/sensestek.png',
      href: '#portfolio',
      tag: 'IoT',
    },
  ];

  ngAfterViewInit(): void {
    const root = this.host.nativeElement;
    root.classList.add('kx-hero-animate');

    const elements = Array.from(root.querySelectorAll('.kx-reveal')) as HTMLElement[];

    if (typeof IntersectionObserver === 'undefined') {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    elements.forEach((el) => el.classList.add('is-pending'));

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            entry.target.classList.remove('is-pending');
            this.observer?.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -8% 0px' },
    );

    elements.forEach((el) => this.observer?.observe(el));

    window.setTimeout(() => {
      elements.forEach((el) => {
        el.classList.add('is-visible');
        el.classList.remove('is-pending');
      });
    }, 2200);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  submitContact(event: Event): void {
    event.preventDefault();
    this.formSubmitted.set(true);
  }
}
