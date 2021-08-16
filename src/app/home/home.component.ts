import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Phong';
  public age = 20;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  public ResetName() : void
  {
    console.log('ResetName');
    this.name = '';
  }
}
