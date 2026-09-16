import { Component } from '@angular/core';
import { SiteHeader } from './components/site-header/site-header';
import { SiteFooter } from './components/site-footer/site-footer';
import { Home } from './pages/home/home';

@Component({
  selector: 'app-root',
  imports: [SiteHeader, SiteFooter, Home],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
