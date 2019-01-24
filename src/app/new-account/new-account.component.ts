import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {LoggingService } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers : [LoggingService]
})
export class NewAccountComponent  {
  

  constructor(private Service: LoggingService, private accountService: AccountService) {
    this.accountService.statusUpdate.subscribe(
      (status: string) => alert ('new status :' + status)
      );
  }

  onCreateAccount(accountname: string, accountstatus: string) {
 
  this.accountService.addAccount(accountname, accountstatus);
  //this.Service.logStatusChange(accountstatus);

  
  }

}
