import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  range = Array(50);

  onTopDropped() {
    console.log("Dropped top");
  }

  onBottomReached() {
    console.log("Reached bottom");
  }

}
