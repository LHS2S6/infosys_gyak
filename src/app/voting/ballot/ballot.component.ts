import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ballot',
  templateUrl: './ballot.component.html',
  styleUrls: ['./ballot.component.css']
})
export class BallotComponent implements OnInit {

  @Input person!: persons;
  @output() vote: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleAgree() {
    this.person.voted =true;
    this.vote.emit(true);
  }

  handleDis() {
    this.person.voted=true;
    this.vote.emit(false);
  }

}