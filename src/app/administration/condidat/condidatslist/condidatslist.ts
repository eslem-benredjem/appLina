import { Component, OnInit } from '@angular/core';
import { Candidat } from '../../../models/condidats';
import { Router } from '@angular/router'; 
import {CandidatService } from '../../../services/condidats/condidat';

@Component({
  selector: 'app-condidatslist',
  imports: [],
  templateUrl: './condidatslist.html',
  styleUrl: './condidatslist.css',
})
export class Condidatslist implements OnInit {

  candidats: Candidat[] = [];

  constructor(
    private candidatService: CandidatService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCandidats();
  }

  loadCandidats(): void {
    this.candidats = this.candidatService.getAll();
  }

  deleteCandidat(id: number): void {
    if (confirm('Voulez-vous supprimer ce candidat ?')) {
      this.candidatService.delete(id);
      this.loadCandidats();
    }
  }

  editCandidat(id: number): void {
    this.router.navigate(['/admin-space/condidates/edit', id]);
  }

  addCandidat(): void {
    this.router.navigate(['/admin-space/condidates/add']);
  }
}