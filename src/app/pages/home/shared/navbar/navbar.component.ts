import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   toPrice(): void{

    // document.getElementById("precios_section").scrollIntoView({alignToTop: "false"});;

    document.getElementById("precios_section").scrollIntoView({behavior: "smooth"});
  }

}
