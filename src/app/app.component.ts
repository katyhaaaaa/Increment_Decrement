import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Incre-Decre';

    constructor() { }

  ngOnInit(): void {
  }
  defaultNumber = 0;
  rndNumber = (Math.random() * 10).toFixed(0);


  encriment(){
    this.defaultNumber =  this.defaultNumber += Math.floor(Math.random( ) * 10);

  }
  decriment(){
    this.defaultNumber =  this.defaultNumber -= Math.floor(Math.random( ) * 10);
  }
}
