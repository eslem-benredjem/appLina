import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Formateur } from '../../../models/Formateur';
import { Formateurservice } from '../../../services/formateur/formateurservice';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formateurform',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './formateurform.html',
  styleUrl: './formateurform.css',
})
export class Formateurform implements OnInit {

  formateur: Formateur = {
    id: 0,
    nom: '',
    prenom: '',
    email: '',
    tel: '',
    cin: '',
    specialites: []
  };

  isEditMode = false;
  newSpecialite: string = '';

  constructor(
    private formateurService: Formateurservice,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const existing = this.formateurService.getById(+id);
      if (existing) {
        this.formateur = { ...existing };
        this.isEditMode = true;
      }
    }
  }

  save(): void {
    if (this.isEditMode) {
      this.formateurService.update(this.formateur);
    } else {
      const formateurs = this.formateurService.getAll();
      this.formateur.id = formateurs.length > 0 ? Math.max(...formateurs.map(f => f.id)) + 1 : 1;
      this.formateurService.add(this.formateur);
    }
    this.router.navigate(['/admin-space/trainers']);
  }

  cancel(): void {
    this.router.navigate(['/admin-space/trainers']);
  }

  addSpecialite(): void {
    if (this.newSpecialite.trim()) {
      this.formateur.specialites = this.formateur.specialites || [];
      this.formateur.specialites.push(this.newSpecialite.trim());
      this.newSpecialite = '';
    }
  }

  removeSpecialite(index: number): void {
    this.formateur.specialites?.splice(index, 1);
  }
}
