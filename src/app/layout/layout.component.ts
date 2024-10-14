import { Component, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  isDarkTheme = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    if (this.isBrowser()) {
      const savedTheme = localStorage.getItem('theme') || 'light-theme';
      this.isDarkTheme = savedTheme === 'dark-theme';
      this.renderer.setAttribute(document.body, 'class', savedTheme);
    }
  }

  toggleTheme(): void {
    if (this.isBrowser()) {
      this.isDarkTheme = !this.isDarkTheme;
      const newTheme = this.isDarkTheme ? 'dark-theme' : 'light-theme';
      this.renderer.setAttribute(document.body, 'class', newTheme);
      localStorage.setItem('theme', newTheme);  // Guardar preferencia en localStorage
    }
  }

  // Método para verificar si estamos en el navegador
  isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}
