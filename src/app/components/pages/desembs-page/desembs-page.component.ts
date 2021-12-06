import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desembs-page',
  templateUrl: './desembs-page.component.html',
  styleUrls: ['./desembs-page.component.css']
})
export class DesembsPageComponent implements OnInit {
  all_desembs: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log('change');
  }
}
