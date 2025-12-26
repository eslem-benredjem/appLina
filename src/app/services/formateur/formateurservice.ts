import { Injectable } from '@angular/core';
import { Formateur } from '../../models/Formateur';

@Injectable({
  providedIn: 'root',
})
export class Formateurservice {
  private storageKey = 'formateurs';

  constructor() {
    if (!localStorage.getItem(this.storageKey)) {
      const initialFormateurs: Formateur[] = [
        { id: 1, nom: 'Ben Ali', prenom: 'Sami', email: 'sami@gmail.com', tel: '12345678', cin: 'AA123456', specialites: ['Java', 'Angular'] },
        { id: 2, nom: 'Trabelsi', prenom: 'Ines', email: 'ines@gmail.com', tel: '87654321', cin: 'BB876543', specialites: ['Python', 'Data'] }
      ];
      localStorage.setItem(this.storageKey, JSON.stringify(initialFormateurs));
    }
  }

  private getAllFromStorage(): Formateur[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  private saveToStorage(formateurs: Formateur[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(formateurs));
  }

  getAll(): Formateur[] {
    return this.getAllFromStorage();
  }

  getById(id: number): Formateur | undefined {
    return this.getAllFromStorage().find(f => f.id === id);
  }

  add(formateur: Formateur): void {
    const formateurs = this.getAllFromStorage();
    formateurs.push(formateur);
    this.saveToStorage(formateurs);
  }

  update(formateur: Formateur): void {
    const formateurs = this.getAllFromStorage();
    const index = formateurs.findIndex(f => f.id === formateur.id);
    if (index !== -1) {
      formateurs[index] = formateur;
      this.saveToStorage(formateurs);
    }
  }

  delete(id: number): void {
    const formateurs = this.getAllFromStorage().filter(f => f.id !== id);
    this.saveToStorage(formateurs);
  }
}