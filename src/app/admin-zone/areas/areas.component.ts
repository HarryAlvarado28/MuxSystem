import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.sass']
})
export class AreasComponent implements OnInit {

  principal = true
  constructor() { }

  ngOnInit() { }
  cleanData() {
    localStorage.removeItem('01-edit-area')
  }

}
