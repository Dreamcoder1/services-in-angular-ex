import { Component } from '@angular/core';
import {AccountService}  from './account.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [AccountService]
})
export class AppComponenet {
 accounts: {name:string, status: string}[] = [];
 constructor (private accountService : AccountService) {}
 ngOninit() {
   this.accounts = this.accountService.accounts;
 }
}
  

