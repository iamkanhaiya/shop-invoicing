import { Component, OnInit,Pipe } from '@angular/core';
import {kanhaiyaService} from "../services/kanhaiya.service";
import * as $ from 'jquery';
import {Router} from "@angular/router";


@Component({
  selector: 'app-kanhaiya',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
@Pipe({
  name: 'filter'
})
export class kanhaiyaComponent implements OnInit {
  name:string = ""
  showEdit:boolean;
  list:any =[];
  editdata:string;
  objectDeleted:object

  constructor( private kanhaiyaService:kanhaiyaService,private router: Router) {
    this.showEdit = true;
  }

  ngOnInit() {
    this.name = "view";
    this.list =JSON.parse(this.kanhaiyaService.getData())
    $("#editComp").hide();

  }

  edit (obj) {
    this.showEdit = false;
    this.editdata = obj;
    $("#viewDiv").hide();
    $("#editComp").show();

  }
  removeItem (obj) {
    $("#deleteModal").show();
    this.objectDeleted = obj
  }

  closeModel () {
    $("#deleteModal").hide();
  }

  deleteRecord() {
    this.kanhaiyaService.removeItem(this.objectDeleted);
    $("#deleteModal").hide();
    location.reload();

  }


}
