import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-desembs-page',
  templateUrl: './desembs-page.component.html',
  styleUrls: ['./desembs-page.component.css']
})
export class DesembsPageComponent implements OnInit {
  all_desembs: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  all_desembs_change(e: MatSlideToggleChange): void {
    this.all_desembs = e.checked
  }
}
