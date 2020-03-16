import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularProject1';
  getVal(){
    return 2;
  }
  HTMLString='<div><p>Prova</p></div>';
}
