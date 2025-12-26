export interface Session {
  id: number;
  formationId: number;
  formateurs: number[]; // tableau d'IDs formateurs
  candidats: number[];  // tableau d'IDs candidats
  dateDebut: string;    // ISO string
  dateFin: string;      // ISO string
  description?: string;
}
