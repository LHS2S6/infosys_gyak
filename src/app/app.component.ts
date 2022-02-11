import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  title = "zsiraf"

  items = ['item1', 'item2', 'item3', 'item4'];

  people =[
    {name: 'Aladar', age: 36, color: 'red'},
    {name: 'Aladar2', age: 35, color: 'green'},
    {name: 'Aladar3', age: 37, color: 'blue'},

  ];

  removeLastElement() {
    this.items.pop();
  }
}
