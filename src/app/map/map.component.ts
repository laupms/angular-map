import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as L from 'leaflet';

import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../services/api.service';

// paramètres de l'icone du marker
const iconUrl = 'assets/pin.png';
const iconDefault = L.icon({
  iconUrl,
  iconSize: [25, 25],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
});
L.Marker.prototype.options.icon = iconDefault;


@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})

export class MapComponent implements AfterViewInit{

  private map : L.Map | any ;

  // intégration du ApiService dans le constructeur
  constructor(private apiService:ApiService){}

  //création de la carte
  createMap(){
    const tls = {
      lat: 43.599998,
      lng: 1.43333,
    };

    const zoomLevel = 12;

    const mainLayer = L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}{r}.png', {
      minZoom: 10,
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    this.map = L.map('map', {
      center: [tls.lat, tls.lng],
      zoom: zoomLevel,
      layers: [mainLayer]
    });

    mainLayer.addTo(this.map);
  }

  // affichage map + markers
  ngAfterViewInit(): void {

    this.createMap();
    this.apiService.addMarkers(this.map);

  }
}