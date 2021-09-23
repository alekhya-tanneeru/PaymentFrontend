import { LocationStrategy } from '@angular/common';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionService } from '../transaction.service';
import { transactionpost } from '../transactionpost';


@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  
  @ViewChild('t')
  table:any;
  tran:any;
  constructor(private trnsr:TransactionService,private router:Router,private locationStrategy: LocationStrategy) {
    this.tran=new transactionpost( trnsr.transac.id,trnsr.transac.dateandtime,
      trnsr.transac.sender_acc_id,trnsr.transac.reciever_acc_bic,
      trnsr.transac.reciever_name,trnsr.transac.reciever_acc_no,trnsr.transac.message,
      trnsr.transac.transfer_type,trnsr.transac.msg_inst,trnsr.transac.amount,trnsr.transac.status,trnsr.transac.reason);
    if(this.tran.transfer_type=="BTO"){
      this.tran.transfer_type="Own Bank Transfer"
    }
    else{
      this.tran.transfer_type="Customer Transfer"
    }
   
   }
  onclick(){
    this.router.navigate(['transaction']);
  }
  ngOnInit(): void {
  }
  

}
