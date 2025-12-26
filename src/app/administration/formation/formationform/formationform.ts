import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Formation } from '../../../models/Formation';
import { FormationService } from '../../../services/formation/formationservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formationform',
  imports: [FormsModule , CommonModule , RouterModule],
  templateUrl: './formationform.html',
  styleUrl: './formationform.css',
})
export class Formationform implements OnInit {
  formation: Formation = {
    id: 0,
    titre: '',
    description: '',
    chargeHoraire: 0,
    niveau: '',
    tags: [],
    categories: [],
    programmePDF: ''
  };

  isEditMode = false;
  tagsInput = '';
  categoriesInput = '';

  constructor(private service: FormationService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const existing = this.service.getById(+id);
      if (existing) {
        this.formation = { ...existing };
        this.tagsInput = existing.tags?.join(', ') || '';
        this.categoriesInput = existing.categories?.join(', ') || '';
        this.isEditMode = true;
      }
    }
  }

  save(): void {
    this.formation.tags = this.tagsInput.split(',').map(t => t.trim()).filter(t => t);
    this.formation.categories = this.categoriesInput.split(',').map(c => c.trim()).filter(c => c);

    if (this.isEditMode) {
      this.service.update(this.formation);
    } else {
      const all = this.service.getAll();
      this.formation.id = all.length ? Math.max(...all.map(f => f.id)) + 1 : 1;
      this.service.add(this.formation);
    }

    this.router.navigate(['/admin-space/formations']);
  }

  cancel(): void {
    this.router.navigate(['/admin-space/formations']);
  }
}