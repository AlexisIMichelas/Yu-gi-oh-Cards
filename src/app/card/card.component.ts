import { Component, OnInit } from '@angular/core';
import { YGOPRODECKService, Card } from '../ygoprodeck.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  newCard: Card; // Déclare une variable pour stocker la nouvelle carte
  cards: Card[] = []; // Déclare une variable pour stocker les cartes récupérées de l'API

  constructor(private ygoprodeckService: YGOPRODECKService) {
    this.newCard = {
      id: '',
      name: '',
      type: '',
      frameType: '',
      desc: '',
      ygoprodeck_url: '',
      image: '',
    };
  }

  ngOnInit() {
    this.ygoprodeckService.getCards().subscribe((data: Card[]) => {
      console.warn(data);
      // Vérifie si data est défini et s'il contient des éléments
      if (data && data.length > 0) {
        // Récupère les données de la première carte de la réponse API
        const cardData = data[0]; // Accède directement à la première carte

        // Met à jour les informations de la nouvelle carte avec les données reçues de l'API
        this.newCard.id = cardData.id;
        this.newCard.name = cardData.name;
        this.newCard.type = cardData.type;
        this.newCard.frameType = cardData.frameType;
        this.newCard.desc = cardData.desc;
        this.newCard.ygoprodeck_url = cardData.ygoprodeck_url;
        this.newCard.image = cardData.image;

        // Ajoute la nouvelle carte à la liste de cartes
        this.cards.push(this.newCard);
      } else {
        console.error('Aucune donnée de carte n\'a été récupérée.');
      }
    }, (error) => {
      console.error('Une erreur est survenue :', error);
    });
  }
}
