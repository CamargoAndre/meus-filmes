import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
})



export class TopoComponent implements OnInit{

  @ViewChild('sidenav', { static: false })
  sidenav!: MatSidenav;

  constructor(){}

  ngOnInit() {

  }

  openSideNav() {
    this.sidenav.open();
  }

  closeSideNav(){
    this.sidenav.close();
  }

}


