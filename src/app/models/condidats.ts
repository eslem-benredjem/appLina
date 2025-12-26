export interface Candidat {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  cin: string;
  photo?: string;
  motDePasse?: string;
}