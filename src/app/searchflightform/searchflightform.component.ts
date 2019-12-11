import { Component, OnInit } from '@angular/core';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { FlightService } from '../services/flight.service';
import { Flight } from '../models/Flight';
import { Subject } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-searchflightform',
  templateUrl: './searchflightform.component.html',
  styleUrls: ['./searchflightform.component.css']
})
export class SearchflightformComponent implements OnInit {

  faArrowCircleDown = faArrowCircleDown;
  searchDesTerm = new Subject<string>();
  searchDepTerm = new Subject<string>();
  searchResults: Array<Flight>;
  loading: boolean;
  noMatches: boolean;
  departure: boolean;
  destination: boolean;

  constructor(private flightService: FlightService) {
    // Init Departure Observable
    this.searchDepTerm.pipe(
      map((e: any) => e.target.value),
      debounceTime(400),
      distinctUntilChanged(),
      filter(term => term.length > 0),
    ).subscribe(searchterm => {
      this.loading = true;
      this._searchDepEntries(searchterm);
    });
    // Init Destination Observable
    this.searchDesTerm.pipe(
      map((e: any) => e.target.value),
      debounceTime(400),
      distinctUntilChanged(),
      filter(term => term.length > 0),
    ).subscribe(searchterm => {
      this.loading = true;
      this._searchDesEntries(searchterm);
    });
  }

  ngOnInit() {
    this.departure = true;
    this.destination = false;
    this.noMatches = false;
  }

  selectDeparture() {
    this.departure = true;
    this.destination = false;
    this.searchResults = new Array<Flight>();
  }

  selectDestination() {
    this.destination = true;
    this.departure = false;
    this.searchResults = new Array<Flight>();
  }

  selectFlight() {
  }

  _searchDepEntries(term: any) {
      this.flightService.searchDepEntries(term).subscribe(response => {
        this.searchResults = response;
        this.loading = false;
        this.noMatches = false;
      }, error => {
        this.noMatches = true;
        this.loading = false;
      })
  }

  _searchDesEntries(term: any) {
      this.flightService.searchDesEntries(term).subscribe(response => {
        this.searchResults = response;
        this.loading = false;
        this.noMatches = false;
      }, error => {
        this.noMatches = true;
        this.loading = false;
      })
  }

}
