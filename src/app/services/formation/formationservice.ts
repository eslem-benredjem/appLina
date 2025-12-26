import { Injectable } from '@angular/core';
import { Formation } from '../../models/Formation';

@Injectable({
  providedIn: 'root',
})
export class FormationService {
  private storageKey = 'formations';

  constructor() {
    if (!localStorage.getItem(this.storageKey)) {
      const initialFormations: Formation[] = [
        {
          id: 1,
          titre: 'Angular Avancé',
          description: 'Approfondir Angular',
          chargeHoraire: 40,
          niveau: 'Avancé',
          tags: ['Angular','Web'],
          categories: ['Développement Web'],
          programmePDF: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
        },
        {
          id: 2,
          titre: 'Python Débutant',
          description: 'Introduction à Python',
          chargeHoraire: 30,
          niveau: 'Débutant',
          tags: ['Python','Data'],
          categories: ['Programmation'],
          programmePDF: ''
        }
      ];
      localStorage.setItem(this.storageKey, JSON.stringify(initialFormations));
    }
  }

  private getAllFromStorage(): Formation[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  private saveToStorage(formations: Formation[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(formations));
  }

  getAll(): Formation[] {
    return this.getAllFromStorage();
  }

  getById(id: number): Formation | undefined {
    return this.getAllFromStorage().find(f => f.id === id);
  }

  add(formation: Formation): void {
    const formations = this.getAllFromStorage();
    formations.push(formation);
    this.saveToStorage(formations);
  }

  update(formation: Formation): void {
    const formations = this.getAllFromStorage();
    const index = formations.findIndex(f => f.id === formation.id);
    if (index !== -1) {
      formations[index] = formation;
      this.saveToStorage(formations);
    }
  }

  delete(id: number): void {
    const formations = this.getAllFromStorage().filter(f => f.id !== id);
    this.saveToStorage(formations);
  }
}
