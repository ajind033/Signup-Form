import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-details-table',
  templateUrl: './details-table.component.html',
  styleUrls: ['./details-table.component.css']
})
export class DetailsTableComponent implements OnInit {

  constructor(private route: Router) { }
  data: object;
  ngOnInit() { }
  detailsData = JSON.parse(localStorage.getItem("signupDetails"));
  togglePassFlag: boolean = false;
  togglePass(id) {
    if (this.togglePassFlag) {
      document.getElementById(id).setAttribute('type', 'password');
    }
    else {
      document.getElementById(id).setAttribute('type', 'text');
    }
    this.togglePassFlag = !this.togglePassFlag;
  }
  editDetails() {
    this.route.navigate(["/editDetails"]);
  }
}



