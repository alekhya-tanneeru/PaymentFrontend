import { Component } from '@angular/core';
import { transactionpost } from './transactionpost';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'payment';
  log:String="n";
  succes:String="x";
  id1:number=0;
  
}
