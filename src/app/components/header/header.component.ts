import { Component, OnInit } from '@angular/core';
import { pjson } from 'src/app/common/global_values';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name: string
  version: string

  constructor() {
    this.name = pjson.name
    this.version = pjson.version
  }

  ngOnInit(): void {
  }

}
