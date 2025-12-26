import { Injectable } from '@angular/core';
import { Candidat } from '../../models/condidats';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  private storageKey = 'candidats';

  constructor() {
    // Initialiser le localStorage si vide
    if (!localStorage.getItem(this.storageKey)) {
      const initialCandidats: Candidat[] = [
        { id: 1, nom: 'Ben Ali', prenom: 'Sami', email: 'sami.benali@gmail.com', cin: '12345678' },
        { id: 2, nom: 'Trabelsi', prenom: 'Ines', email: 'ines.trabelsi@gmail.com', cin: '87654321' },
        { id: 3, nom: 'Karray', prenom: 'Youssef', email: 'youssef.karray@gmail.com', cin: '11223344' }
      ];
      localStorage.setItem(this.storageKey, JSON.stringify(initialCandidats));
    }
  }

  private getAllFromStorage(): Candidat[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  private saveToStorage(candidats: Candidat[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(candidats));
  }

  getAll(): Candidat[] {
    return this.getAllFromStorage();
  }

  getById(id: number): Candidat | undefined {
    return this.getAllFromStorage().find(c => c.id === id);
  }

  add(candidat: Candidat): void {
    const candidats = this.getAllFromStorage();
    candidats.push(candidat);
    this.saveToStorage(candidats);
  }

  update(candidat: Candidat): void {
    const candidats = this.getAllFromStorage();
    const index = candidats.findIndex(c => c.id === candidat.id);
    if (index !== -1) {
      candidats[index] = candidat;
      this.saveToStorage(candidats);
    }
  }

  delete(id: number): void {
    const candidats = this.getAllFromStorage().filter(c => c.id !== id);
    this.saveToStorage(candidats);
  }
}
