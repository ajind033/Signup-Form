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
  ngOnInit() {

    this.data = JSON.parse(localStorage.getItem("signupDetails"));
    var table = document.getElementById("userDetails");

    for (let key in this.data) {
      var trData = document.createElement("tr");

      var td1 = document.createElement("td");
      var node1 = document.createTextNode(key);
      td1.appendChild(node1);
      trData.appendChild(td1);

      var td2 = document.createElement("td");
      var node2 = document.createTextNode(this.data[key]);
      td2.appendChild(node2);

      trData.appendChild(td2);
      table.appendChild(trData);
    }
  }
 
  editDetails() {
    this.route.navigate(["/editDetails"]);
  }

}



