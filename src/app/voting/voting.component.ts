import { Component, OnInit } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {

  @input()kerdes: string | undefined;

  @input() people!: Person; 
  agree=0;
  disagree=0;


  constructor() { }

  ngOnInit() {


  }

  handleVote(agree: boolean) {
    agree : this.agree : 
  };



}


