import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currencyList = [];
  Alldata = [];
  searchData: any;
  global: any;
  convertCurrency: any;
  constructor(private router: Router) {}

  ngOnInit() {
    this.Alldata=['Active', 'Deactive', 'Disable', 'Enable']
  }
  onSearch() {
    console.log(this.searchData)
  }

}
