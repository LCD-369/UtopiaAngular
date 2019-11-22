import { Component, OnInit } from '@angular/core';
import { Airport} from '../models/Airport';
import { AirportService } from '../services/airport.service';

@Component({
  selector: 'app-airportlookupmodal',
  templateUrl: './airportlookupmodal.component.html',
  styleUrls: ['./airportlookupmodal.component.css']
})
export class AirportlookupmodalComponent implements OnInit {
  selectedAirport: Airport;
  airports: Array<Airport>;
  temp: Array<Airport>;
  showTable: boolean;
  searchAirportBy: any;
  regions: any;
  states: any;
  regionSelect: any;
  stateSelect: any;

  constructor(private airportService: AirportService) {
  }

  ngOnInit() {
    this.airports = [];
    this.temp = [];
    this.showTable = false;
    this.regions = ['United States', 'United Kindom', 'Europe'];
    this.states = ['CA', 'CO', 'MA', 'NY', 'TX', 'VA'];
    this.searchAirportBy = {
      state: null,
      country: null
    };
    this.airportService.getAirport().subscribe(airports => {this.airports = airports;});
  }

  showAirportTable() {
    if(this.regionSelect !== null && this.stateSelect !== null) {
        this.airports.forEach((current) => {
          if(this.searchAirportBy.country === current.country &&
          this.searchAirportBy.state === current.state) {
            this.temp.push(current);
          }
        });
      this.showTable = true;
    }
  }

  selectRegion(region: string) {
    this.searchAirportBy.country = region;
    this.regionSelect = region;
  }

  selectState(state: string) {
    this.searchAirportBy.state = state;
    this.stateSelect = state;
    this.showAirportTable();
  }

  selectAirport(airport) {
    this.selectAirport = airport;
  }

}
