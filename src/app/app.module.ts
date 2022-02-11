import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { VotingComponent } from './voting/voting.component';
import { BallotComponent } from './voting/ballot/ballot.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, VotingComponent, BallotComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
