import { Component, OnInit, Input } from '@angular/core';
import { Airport} from '../models/Airport';
import { AirportService } from '../services/airport.service';

@Component({
  selector: 'app-airportlookupto',
  templateUrl: './airportlookupto.component.html',
  styleUrls: ['./airportlookupto.component.css']
})
export class AirportlookuptoComponent implements OnInit {
  @Input() selectedFromAirport;
  airports: Array<Airport>;
  temp: Array<Airport>;
  searchAirport: Airport = {
    code: null,
    name: null,
    city: null,
    state: null,
    country: null,
  };
  regionField: boolean;
  stateField: boolean;
  showTable: boolean;
  regions;
  states;
  regionSelect;
  stateSelect;


  constructor(private airportService: AirportService) {
    this.airports = [];
    this.temp = [];
   }

  ngOnInit() {
    this.regionField = false;
    this.stateField = false;
    this.showTable = false;
    this.regions = ['United States', 'United Kindom', 'Europe'];
    this.states = ['CA', 'CO', 'MA', 'NY', 'TX', 'VA'];
    this.airportService.getAirport().subscribe(airports => {
      this.airports = airports;
      });
  }

  showAirportTable() {
    if(this.regionField === true && this.stateField === true) {
        this.airports.forEach((current) => {
          if(this.searchAirport.country == current.country &&
          this.searchAirport.state == current.state) {
            this.temp.push(current);
          }
        });
      this.showTable = true;
    }
  }

  selectRegion(region: string) {
    this.regionField = true;
    this.searchAirport.country = region;
    this.regionSelect = region;
  }

  selectState(state: string) {
    this.stateField = true;
    this.searchAirport.state = state;
    this.stateSelect = state;
    this.showAirportTable();
  }

  selectAirport(airport: Airport) {
    this.selectedFromAirport = airport;
  }

  }
