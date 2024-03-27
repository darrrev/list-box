import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('checkboxAllLeft') cBoxLeft: ElementRef<any>;
  @ViewChild('checkboxAllRight') cBoxRight: ElementRef<any>;

  listBoxLeft = ["One", "Two", "Three", "Four", "Five", "Six"]; 
  listBoxRight = [];
  selectedIndicesLeft = [];
  selectedIndicesRight = [];

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
    if(element.closest('.left-box')) {
      if(element.checked && !this.selectedIndicesLeft.includes(index)) return this.selectedIndicesLeft.push(index); 
      this.selectedIndicesLeft.splice(this.selectedIndicesLeft.indexOf(index), 1);
    } else {
      if(element.checked && !this.selectedIndicesRight.includes(index)) return this.selectedIndicesRight.push(index);
      this.selectedIndicesRight.splice(this.selectedIndicesRight.indexOf(index), 1);
    }
  }

  toRight() {
    if(!this.selectedIndicesLeft.length) {
      this.listBoxRight.push(this.listBoxLeft[0]);
      this.listBoxLeft.splice(0, 1);
    } else {
      this.listBoxRight.push(this.listBoxLeft[this.selectedIndicesLeft[0]]);
      this.listBoxLeft.splice(this.selectedIndicesLeft[0], 1);
      this.selectedIndicesLeft = [];
    }

    let cbxAll = this.cBoxLeft.nativeElement;
    if(cbxAll.checked) cbxAll.checked = false;
  }

  toLeft() {
    if(!this.selectedIndicesRight.length) {
      this.listBoxLeft.push(this.listBoxRight[0]);
      this.listBoxRight.splice(0, 1);
    } else {
      this.listBoxLeft.push(this.listBoxRight[this.selectedIndicesRight[0]]);
      this.listBoxRight.splice(this.selectedIndicesRight[0], 1);
      this.selectedIndicesRight = [];
    }

    let cbxAll = this.cBoxRight.nativeElement;
    if(cbxAll.checked) cbxAll.checked = false;
  }

  allRight() {
    if(!this.selectedIndicesLeft.length) {
      this.listBoxLeft.forEach(
        item => {
          this.listBoxRight.push(item);
          this.listBoxLeft = [];
        }
      );
    } else {
      this.selectedIndicesLeft.forEach(
        item => {
          this.listBoxRight.push(this.listBoxLeft[item]);
          if(item === this.selectedIndicesLeft[this.selectedIndicesLeft.length - 1]) {
            for(let i = this.selectedIndicesLeft.length - 1; i >= 0; i--) {
              this.listBoxLeft.splice(this.selectedIndicesLeft[i], 1);
            }
          } 
        }
      );
    }
  }

  allLeft() {
    if(!this.selectedIndicesRight.length) {
      this.listBoxRight.forEach(
        item => {
          this.listBoxLeft.push(item);
          this.listBoxRight = [];
        }
      );
    } else {
      this.selectedIndicesRight.forEach(
        item => {
          this.listBoxLeft.push(this.listBoxRight[item]);
          if(item === this.selectedIndicesRight[this.selectedIndicesRight.length - 1]) {
            for(let i = this.selectedIndicesRight.length - 1; i >= 0; i--) {
              this.listBoxRight.splice(this.selectedIndicesRight[i], 1);
            }
          } 
        }
      );
    }
  }

  itemSearch(element) {
    let parentBox = element.closest('.parent-card');
    let itemList = parentBox.querySelectorAll('.item-card span');
    for(let i = 0; i < itemList.length; i += 1) {
      if(itemList[i].innerText.toLowerCase().includes(element.value.toLowerCase())) {
        itemList[i].parentNode.style.display = "flex";
      } else {
        itemList[i].parentNode.style.display = "none";
      }
    }
  }
}
