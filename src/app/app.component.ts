import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  listBoxOne = ["One", "Two", "Three", "Four", "Five", "Six"]; 
  listBoxTwo = [];
  selectedIndex;

  constructor() {

  }

  selectedItem(event, index) {
    event.currentTarget.style.borderLeft = "5px solid #5d9cc9";
    this.selectedIndex = index;
  }

  toRight() {
    this.listBoxTwo.push(this.listBoxOne[this.selectedIndex]);
    this.listBoxOne.splice(this.selectedIndex, 1);
  }

  toLeft() {
    this.listBoxOne.push(this.listBoxTwo[this.selectedIndex]);
    this.listBoxTwo.splice(this.selectedIndex, 1);
  }

  allRight() {
    this.listBoxTwo = this.listBoxOne;
    this.listBoxOne = [];
  }

  allLeft() {
    this.listBoxOne = this.listBoxTwo;
    this.listBoxTwo = [];
  }
}
