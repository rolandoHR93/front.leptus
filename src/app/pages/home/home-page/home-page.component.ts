import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
