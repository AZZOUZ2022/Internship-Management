export interface EncadrantPedagogique {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  CNE: string;
  codeApogee: string;
  username: string;
  password: string;
  sessionEncadrement: SessionEncadrement[];
}

export interface SessionEncadrement {
  // Define the properties for the SessionEncadrement model
}
