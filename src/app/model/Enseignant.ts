export interface Enseignant {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  CNE: string;
  codeApogee: string;
  username: string;
  password: string;
  responsableFiliere: boolean;
  responsableDepartement: boolean;
  filiereDTO: FiliereDTO;
  departementDTO: DepartementDTO;
}

export interface FiliereDTO {
  // Define the properties for the FiliereDTO model
}

export interface DepartementDTO {
  // Define the properties for the DepartementDTO model
}
