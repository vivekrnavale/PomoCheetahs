import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  Portfolio: string = "Portfolio";
  Activity:string = "Activity";
  Trade: string = "Trade";
  Preferences: string = "Preferences";
  constructor() { }

  ngOnInit(): void {
  }

}
