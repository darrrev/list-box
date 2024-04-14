import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  fenrir = [
    {
      name: 'Soma',
      age: 24
    },
    {
      name: 'Lenka',
      age: 22
    },
    {
      name: 'Lindow',
      age: 28
    },
    {
      name: 'Tachibana',
      age: 27
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
