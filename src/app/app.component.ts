import { Component } from '@angular/core';
import {kanhaiyaService} from "./services/kanhaiya.service";
import {EditComponent} from "./edit/edit.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string ="";

  constructor (private kanhaiyaService:kanhaiyaService) {

    this.title = kanhaiyaService.getTitle();
  }


}
