import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Candidat } from '../../../models/condidats';
import {CandidatService } from '../../../services/condidats/condidat';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-condidatform',
  imports: [FormsModule, CommonModule , RouterModule],
  templateUrl: './condidatform.html',
  styleUrl: './condidatform.css',
})
export class Condidatform implements OnInit {

  candidat: Candidat = {
    id: 0,
    nom: '',
    prenom: '',
    email: '',
    cin: '',
    motDePasse: ''
  };

  isEditMode = false;

  constructor(
    private candidatService: CandidatService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const existing = this.candidatService.getById(+id);
      if (existing) {
        this.candidat = { ...existing }; // copie de l'objet
        this.isEditMode = true;
      }
    }
  }

  save(): void {
    if (this.isEditMode) {
      this.candidatService.update(this.candidat);
    } else {
      // Ajouter un id unique pour un nouveau candidat
      const newId = Math.max(...this.candidatService.getAll().map(c => c.id)) + 1;
      this.candidat.id = newId;
      this.candidatService.add(this.candidat);
    }
    this.router.navigate(['/admin-space/condidates']);
  }

  cancel(): void {
    this.router.navigate(['/admin-space/condidates']);
  }
}