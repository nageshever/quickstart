import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `<h1>Name {{name}}</h1>
  <p><strong>Email: {{email}}</strong></p>
  <p><b>Address: </b><br>{{address.street}} <br> {{address.city}} <br> {{address.state}}</p>
  <button (click)="toggleHobbies()">{{btnToggleHobbies}}</button>
  <div *ngIf="showHobbies">
  <h3>Hobbies</h3>
    <ul>
      <li *ngFor="let hobby of hobbies">
      {{hobby}}
      </li>
    </ul>
  </div>
  `,
})
export class UserComponent  { 
  name: string;
  email: string;
  address: address;
  hobbies:string[];
  showHobbies:boolean;
  btnToggleHobbies:string;

constructor() {
  console.log('This is from user component constructor');
  this.name = 'Nagesh Lakinepally';
  this.email = 'nagesh.lakinepally@gmail.com';
  this.address = {
    street: '123 Main Street',
    city:'Morrisville',
    state:'NC'
  }
  this.hobbies = ['Movies', 'Sports', 'Music'];
  this.showHobbies = false;
  this.btnToggleHobbies = "Show Hobbies";
}

toggleHobbies() {
  if (this.showHobbies==true) {
    this.showHobbies = false;
    this.btnToggleHobbies = "Show Hobbies";
  } else {
    this.showHobbies = true;
    this.btnToggleHobbies = "Hide Hobbies";
  }
}
 
}

 interface address {
   street : string;
  city : string;
  state : string;
 }


