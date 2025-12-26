export interface Formation {
  id: number;
  titre: string;
  description: string;
  chargeHoraire: number;
  programmePDF?: string; // URL ou chemin du PDF
  niveau: string; 
  tags?: string[];
  categories?: string[];
}
