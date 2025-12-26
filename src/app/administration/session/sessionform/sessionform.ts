import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Session } from '../../../models/Session';
import { CandidatService } from '../../../services/condidats/condidat';
import { Formateurservice } from '../../../services/formateur/formateurservice';
import { FormationService } from '../../../services/formation/formationservice';
import { SessionService } from '../../../services/session/session-service';
import { Candidat } from '../../../models/condidats';
import { Formateur } from '../../../models/Formateur';
import { Formation } from '../../../models/Formation';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sessionform',
  imports: [FormsModule, CommonModule],
  templateUrl: './sessionform.html',
  styleUrl: './sessionform.css',
})
export class Sessionform implements OnInit {
  
  session: Session = {
    id: 0,
    formationId: 0,
    formateurs: [],
    candidats: [],
    dateDebut: '',
    dateFin: '',
    description: '',
  };

  isEditMode = false;
  formations: Formation[] = [];
  formateurs: Formateur[] = [];
  candidats: Candidat[] = [];
  selectedFormateurs: number[] = [];
  selectedCandidats: number[] = [];

    constructor(
    private service: SessionService,
    private formationService: FormationService,
    private candidatService: CandidatService,
    private formateurService: Formateurservice,
    private route: ActivatedRoute,
    private router: Router
  ) {}

 ngOnInit(): void {
    // Charger les données statiques
    this.formations = this.formationService.getAll();
    this.formateurs = this.formateurService.getAll();
    this.candidats = this.candidatService.getAll();

    // Vérifier si on est en mode édition
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const existing = this.service.getById(+id);
      if (existing) {
        this.session = { ...existing };
        this.selectedFormateurs = [...existing.formateurs];
        this.selectedCandidats = [...existing.candidats];
        this.isEditMode = true;
      }
    }
  }

  // Gestion de la sélection multiple des formateurs (max 2)
  onFormateurChange(event: any) {
    const id = +event.target.value;
    if (event.target.checked) {
      if (this.selectedFormateurs.length >= 2) {
        alert('Maximum 2 formateurs par session.');
        event.target.checked = false;
        return;
      }
      this.selectedFormateurs.push(id);
    } else {
      this.selectedFormateurs = this.selectedFormateurs.filter(f => f !== id);
    }
  }

  // Gestion de la sélection multiple des candidats (max 15)
  onCandidatChange(event: any) {
    const id = +event.target.value;
    if (event.target.checked) {
      if (this.selectedCandidats.length >= 15) {
        alert('Maximum 15 candidats par session.');
        event.target.checked = false;
        return;
      }
      this.selectedCandidats.push(id);
    } else {
      this.selectedCandidats = this.selectedCandidats.filter(c => c !== id);
    }
  }

  save(): void {
    this.session.formateurs = [...this.selectedFormateurs];
    this.session.candidats = [...this.selectedCandidats];

    if (this.isEditMode) {
      this.service.update(this.session);
    } else {
      const all = this.service.getAll();
      this.session.id = all.length ? Math.max(...all.map(s => s.id)) + 1 : 1;
      this.service.add(this.session);
    }
    this.router.navigate(['/admin-space/sessions']);
  }

  cancel(): void {
    this.router.navigate(['/admin-space/sessions']);
  }
  getFormationTitre(id: number | string): string {
  const f = this.formationService.getById(+id); // convertit string -> number si besoin
  return f ? f.titre : 'Inconnue';
}

}