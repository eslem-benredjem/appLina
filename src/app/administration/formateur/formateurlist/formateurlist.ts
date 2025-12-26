import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Formateur } from '../../../models/Formateur';
import { Formateurservice } from '../../../services/formateur/formateurservice';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formateurlist',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './formateurlist.html',
  styleUrl: './formateurlist.css',
})
export class Formateurlist implements OnInit {

  formateurs: Formateur[] = [];

  constructor(
    private formateurService: Formateurservice,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadFormateurs();
  }

  loadFormateurs(): void {
    this.formateurs = this.formateurService.getAll();
  }

  editFormateur(id: number): void {
    this.router.navigate(['/admin-space/trainers/edit', id]);
  }

  addFormateur(): void {
    this.router.navigate(['/admin-space/trainers/add']);
  }

  deleteFormateur(id: number): void {
    if (confirm('Voulez-vous supprimer ce formateur ?')) {
      this.formateurService.delete(id);
      this.loadFormateurs();
    }
  }
}