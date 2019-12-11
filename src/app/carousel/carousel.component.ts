import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { trigger, transition, useAnimation } from '@angular/animations';
import { lightSpeedIn } from 'ng-animate';

function isTrue(){
  return true;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgbCarouselConfig],
  animations: [
   trigger('lightSpeedIn', [transition(isTrue, useAnimation(lightSpeedIn))])
 ],
})
export class CarouselComponent implements OnInit {
  lightSpeedIn: any;

  constructor(config: NgbCarouselConfig) {
   // customize default values of carousels used by this component tree
   config.interval = 5000;
   config.wrap = true;
   config.keyboard = false;
   config.pauseOnHover = true;
   config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
 }
  ngOnInit() {

  }

}
