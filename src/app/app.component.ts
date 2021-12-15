import { Component } from '@angular/core';
import { pjson } from './common/global_values';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = pjson.name
}
