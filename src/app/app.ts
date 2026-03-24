import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {Navbar} from "./navbar/navbar";
import { Home } from './home/home';
import { About } from "./about/about";
import { Projects } from "./projects/projects";
import { Contact } from "./contact/contact";
import { Footer } from "./footer/footer";
import { Education } from "./education/education";
@Component({
  selector: 'app-root',
  imports: [Navbar, Home, About, Projects, Contact, Footer, Education],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Portfolio');
}
