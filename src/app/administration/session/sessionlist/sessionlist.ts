import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Session } from '../../../models/Session';
import { CandidatService } from '../../../services/condidats/condidat';
import { FormationService } from '../../../services/formation/formationservice';
import { SessionService } from '../../../services/session/session-service';
import { Formateurservice } from '../../../services/formateur/formateurservice';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sessionlist',
  imports: [FormsModule ,CommonModule],
  templateUrl: './sessionlist.html',
  styleUrl: './sessionlist.css',
})
export class Sessionlist implements OnInit {
  sessions: Session[] = [];

  constructor(
    private service: SessionService,
    private formationService: FormationService,
    private candidatService: CandidatService,
    private formateurService: Formateurservice,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadSessions();
  }

  loadSessions(): void {
    this.sessions = this.service.getAll();
  }

  addSession(): void {
    this.router.navigate(['/admin-space/sessions/add']);
  }

  editSession(id: number): void {
    this.router.navigate(['/admin-space/sessions/edit', id]);
  }

  deleteSession(id: number): void {
    if(confirm('Voulez-vous supprimer cette session ?')) {
      this.service.delete(id);
      this.loadSessions();
    }
  }

  getFormationTitre(id: number | string): string {
  const f = this.formationService.getById(+id); // le + convertit string -> number
  return f ? f.titre : 'Inconnue';
}


  getCandidatsNoms(ids: number[]): string[] {
    return ids.map(id => {
      const c = this.candidatService.getById(id);
      return c ? `${c.nom} ${c.prenom}` : 'Inconnu';
    });
  }

  getFormateursNoms(ids: number[]): string[] {
    return ids.map(id => {
      const t = this.formateurService.getById(id);
      return t ? `${t.nom} ${t.prenom}` : 'Inconnu';
    });
  }
}
