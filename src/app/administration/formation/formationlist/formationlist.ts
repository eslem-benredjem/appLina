import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Formation } from '../../../models/Formation';
import { FormationService } from '../../../services/formation/formationservice';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formationlist',
  imports: [FormsModule , CommonModule , RouterModule],
  templateUrl: './formationlist.html',
  styleUrl: './formationlist.css',
})
export class Formationlist implements OnInit {
  formations: Formation[] = [];

  constructor(private service: FormationService, private router: Router) {}

  ngOnInit(): void {
    this.loadFormations();
  }

  loadFormations(): void {
    this.formations = this.service.getAll();
  }

  addFormation(): void {
    this.router.navigate(['/admin-space/formations/add']);
  }

  editFormation(id: number): void {
    this.router.navigate(['/admin-space/formations/edit', id]);
  }

  deleteFormation(id: number): void {
    if(confirm('Voulez-vous supprimer cette formation ?')) {
      this.service.delete(id);
      this.loadFormations();
    }
  }

  viewDetail(id: number): void {
    this.router.navigate(['/admin-space/formations/details', id]);
  }
}