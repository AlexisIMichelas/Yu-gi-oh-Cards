import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Définition de l'interface Card
export interface Card {
  id: string;
  name: string;
  type: string;
  frameType: string;
  desc: string;
  ygoprodeck_url: string;
  image: string; // Champ image ajouté
}

@Injectable({
  providedIn: 'root'
})
export class YGOPRODECKService {

  private apiUrl = 'https://db.ygoprodeck.com/api/v7/randomcard.php';

  constructor(private http: HttpClient) { }

  getCards(): Observable<Card[]> { // Utilisation de l'interface Card dans le type de retour
    return this.http.get<Card[]>(this.apiUrl); // Spécification du type de réponse
  }
}
