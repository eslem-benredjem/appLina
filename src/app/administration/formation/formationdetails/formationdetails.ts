import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Formation } from '../../../models/Formation';
import { FormationService } from '../../../services/formation/formationservice';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

declare const window: any;

@Component({
  selector: 'app-formationdetails',
  imports: [FormsModule , CommonModule ,RouterModule],
  templateUrl: './formationdetails.html',
  styleUrl: './formationdetails.css',
})
export class Formationdetails implements OnInit {
  formation: Formation | undefined;

  constructor(private service: FormationService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.formation = this.service.getById(+id);
    }
  }

  downloadPDF(): void {
    if (this.formation?.programmePDF) {
      window.open(this.formation.programmePDF, '_blank');
    } else {
      alert('Aucun PDF disponible pour cette formation.');
    }
  }
}