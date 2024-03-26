import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  listBoxOne = ["One", "Two", "Three", "Four", "Five", "Six"]; 
  listBoxTwo = [];
  selectedIndices = [];

  constructor() {}

  selectAllHandler(element) {
    let checkBoxState = element.checked;
    let listBox = element.closest('.parent-card');
    listBox.querySelectorAll('.item-card').forEach(
      (el, i) => {
        el.childNodes[0].checked = checkBoxState ? true : false;
        this.selectItem(el.childNodes[0], i);
      }
    );
  }

  selectItem(element, index) {
    if(element.checked && !this.selectedIndices.includes(index)) {
      this.selectedIndices.push(index);
      return;
    }
    
    if(this.selectedIndices.includes(index)) {
      this.selectedIndices.splice(this.selectedIndices.indexOf(index), 1);
      return;
    }  
  }

  toRight() {
    this.selectedIndices.forEach(
      item => {
        this.listBoxTwo.push(this.listBoxOne[item]);
        this.listBoxOne.splice(item, 1);
        this.selectedIndices = [];
      }
    );
  }

  toLeft() {
    
  }

  allRight() {
    this.selectedIndices.forEach(
      item => {
        this.listBoxTwo.push(this.listBoxOne[item]);
        if(item === this.selectedIndices[this.selectedIndices.length - 1]) {
          for(let i = this.selectedIndices.length - 1; i >= 0; i--) {
            this.listBoxOne.splice(this.selectedIndices[i], 1);
          }
        } 
      }
    );
  }

  allLeft() {

  }
}
