import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Session2';
  myHero = 'Windstorm';
  heroImageUrl = 'assets/images/hero.png';
  isUnchanged = true;
  isSpecial = false;
  isMouseIn = false;
  value:string ="";
  bindValue:string = "2 way Binding";
  ngBinding="NgModelBinding";

  getVal(){
    return 5;
  }


  changeTitle(){
    this.title = 'Angular Session 2';
    this.bindValue = 'value flow from component to View';


  }

  buttonClickEvent(){
    alert('Button is Clicked');
  }
  onKeyBoarEvent($event : KeyboardEvent){
    let msg = "User Press the Key " + $event.key;
    alert(msg);
    this.value += (<HTMLInputElement>event.target).value + ' | ';
     

  }
  mouseEnterEvents(){
    this.isMouseIn = true;

  }
  mouseLeaveEvents(){
    this.isMouseIn = false;
  }
}
