import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponenet } from './app.component';
//import { CockpitComponent } from './cockpit/cockpit.component';
//import { ServerElementComponent } from './server-element/server-element.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountService } from './account.service';
import { LoggingService } from './logging.service';

@NgModule({
  declarations: [
    AccountComponent,
    NewAccountComponent,
    AppComponenet
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AccountService, LoggingService],
  bootstrap :[AppComponenet]
  
})
export class AppModule { }
