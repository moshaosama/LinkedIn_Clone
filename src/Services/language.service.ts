import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

interface Languages {
  id: number;
  language: string;
  proficiency: string;
}

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  httpClient = inject(HttpClient);
  Languages = signal<Languages[]>([]);

  createLanguage(language: string, proficiency: string) {
    this.httpClient
      .post<Languages[]>('http://localhost:8080/createLanguage', {
        language,
        proficiency,
      })
      .subscribe({
        next: (val) => this.Languages.set(val),
      });
  }
}
