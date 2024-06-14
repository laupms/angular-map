import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL: string = 'https://data.education.gouv.fr/api/explore/v2.1/catalog/datasets/fr-en-annuaire-education/records?select=nom_commune%2C%20nom_etablissement%2C%20adresse_1%2C%20code_postal%2C%20type_etablissement%2C%20statut_public_prive%2C%20position&where=nom_commune%20%3D%22Toulouse%22&limit=10';

  constructor(private http: HttpClient) {}

 // afficher les markers sur la map
  addMarkers(map: L.Map) {

    fetch(this.apiURL)
    .then(response => {
     console.log(response);
     return response.json();
    })
    .then(users => {
     console.log(users.results);

     // résultat pour chaque marker
     for (const user of users.results) {

        const x = user.position.lat;
        const y = user.position.lon;

        const marker = L.marker([x,y]);

        // ajout sur la map
        marker.addTo(map);

        // afficher popup lorsqu'on clique sur un marqueur
        marker.bindPopup("<strong>" + user.nom_etablissement + "</strong>" + "<br>" + user.type_etablissement + " " + user.statut_public_prive + "<br>" + user.adresse_1 + "<br>" + user.code_postal + " " + user.nom_commune + "<br>" + "<a href='/form' routerLink='/form' id='bt_contact'>Contact</a>");

      }
    });
  }
} 

