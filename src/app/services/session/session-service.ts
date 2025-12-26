// services/session/session-service.ts
import { Injectable } from '@angular/core';
import { Session } from '../../models/Session';

@Injectable({ providedIn: 'root' })
export class SessionService {
  private storageKey = 'sessions';

  constructor() {
    if (!localStorage.getItem(this.storageKey)) {
      localStorage.setItem(this.storageKey, JSON.stringify([]));
    }
  }

  private getAllFromStorage(): Session[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  private saveToStorage(sessions: Session[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(sessions));
  }

  getAll(): Session[] {
    return this.getAllFromStorage();
  }

  getById(id: number): Session | undefined {
    return this.getAllFromStorage().find(s => s.id === id);
  }

  add(session: Session): boolean {
    if (session.candidats.length > 15) {
      alert('Limite de 15 candidats par session dépassée.');
      return false;
    }
    const sessions = this.getAllFromStorage();
    sessions.push(session);
    this.saveToStorage(sessions);
    return true;
  }

  update(session: Session): boolean {
    if (session.candidats.length > 15) {
      alert('Limite de 15 candidats par session dépassée.');
      return false;
    }
    const sessions = this.getAllFromStorage();
    const index = sessions.findIndex(s => s.id === session.id);
    if (index !== -1) {
      sessions[index] = session;
      this.saveToStorage(sessions);
      return true;
    }
    return false;
  }

  delete(id: number): void {
    const sessions = this.getAllFromStorage().filter(s => s.id !== id);
    this.saveToStorage(sessions);
  }
}
