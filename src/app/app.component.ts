import { Component } from '@angular/core';

//it is called decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:String = 'brand';


  constructor(){
  //  console.log(123);
     this.changeName('jinal');
  }


  //custome method
  changeName(name:String):void{
    this.name = name;
  }


}
