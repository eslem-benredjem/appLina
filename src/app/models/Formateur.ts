export interface Formateur {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  tel: string;
  cin: string;
  photo?: string;
  cv?: string;
  specialites?: string[]; // tableau de spécialités
}
