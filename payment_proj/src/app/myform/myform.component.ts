import { EventEmitter, Output, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { customer } from './customer';
import { TransactionService } from '../transaction.service';
import { Bank } from './Bank';
import { Subscriber } from 'rxjs';
import { transaction } from './transaction';
import { transactionpost } from '../transactionpost';
import { Input } from '@angular/core';
import { sdn } from './sdn';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})

export class MyformComponent implements OnInit { 
  cust:customer=new customer();
  bankdrp:customer[]=[];
  transfer:String="";
  bank:Bank=new Bank();
  cust1: customer=new customer();
  @ViewChild('h')
  form:any;
  @Output() id= new EventEmitter<number>();
  succes:boolean=true;
  model:transaction=new transaction();
  get:boolean=false;
  get1:boolean=false;
  dropdown:boolean=false;
  trans:String[]=["CT","BTO"];
  msg:String[]=['CHQB','CORT','HOLD','INTC','PHOB','PHOI','PHON','REPA','SDVA'];
  mod:transaction=new transaction();
  @Output() onsave=new EventEmitter<String>();
  constructor(private transactionService:TransactionService ,private router:Router ) { 
    function disableBack() { window.history.forward() }
  
    window.onpageshow = function(evt) { if (evt.persisted) disableBack() }
  }
  permute(permutation:String[]) {
    var length = permutation.length,
        result = [permutation.slice()],
        c = new Array(length).fill(0),
        i = 1, k, p;
  
    while (i < length) {
      if (c[i] < i) {
        k = i % 2 && c[i];
        p = permutation[i];
        permutation[i] = permutation[k];
        permutation[k] = p;
        ++c[i];
        i = 1;
        result.push((permutation.slice()));
      } else {
        c[i] = 0;
        ++i;
      }
    }
    return result;
  }
  onSubmit(){
    
  }
  oncheck(ar:String[]){
    var s:sdn=new sdn();
    var bool:boolean=true;
    ar.forEach(e=>{
      if(s.sd.toLowerCase().includes(e.toLowerCase())) 
      bool=false;
    });
 return bool;
  }
  onclick(){
    var a:String[]=this.form.value.reciever_name.split(' ');
    var st:String[][]=this.permute(a);
    var arr:String[]=[];
    var str1:String="";
   st.forEach(e=>{arr.push(e.join(' '))});
    if(this.oncheck(arr)){
     this.ontransfer();
   
    }else{
      alert("Transaction Failed:Reciever in sdn list");
    }
  }
  ontransfer(){
    const model1=new transaction(
      this.form.value.sender_acc_id,
      this.form.value.reciever_acc_bic,
      this.form.value.reciever_name,
      this.form.value.reciever_acc_no,
      +this.form.value.amount,
      this.form.value.message,
      this.transfer
     )
      this.transactionService.addTransaction(model1).subscribe(res=>
        {
          if(res.status===200){
          var transacpost:transactionpost=new transactionpost(
          res.id,res.dateandtime,res.sender_acc_id,res.reciever_acc_bic,
          res.reciever_name,res.reciever_acc_no,res.message,res.transfer_type,res.msg_inst,res.amount,res.status,res.reason)
          this.router.navigate(['success']);
          this.transactionService.transac=transacpost;
          }
          else if(res.status==201){
            alert(res.reason);
            this.form.reset;
          }
          else if(res.status==202){
            alert(res.reason);
          }
          else if(res.status==204){
            alert(res.reason);
          }
          else if(res.status==205){
            alert(res.reason);
          }
          else{
            alert("Transaction Failed")
          }
        }
      );
    } 
   

   
    //this.form.reset();
  
 
  
  onfetch(){
    this.transactionService.getCustomer(this.form.value.sender_acc_id).subscribe(response=>{
      this.cust= new customer(response.id,response.holder_name,response.clear_balance,response.type,response.overdraft);
      });
    
    this.get=true;

     
  }
  oncli(){
    this.router.navigate(['login']);
  }
  
  onfetch1(event:any){
   
    this.get1=false;
    if(this.cust.type==="bank"){
      this.transfer="BTO";
      this.transactionService.getCustomer(this.form.value.reciever_acc_bic).subscribe(response=>{
        this.cust1= new customer(response.id,response.holder_name,response.clear_balance,response.type,response.overdraft);
        });
    }else{
      this.transfer="CT";
    this.transactionService.getBank(this.form.value.reciever_acc_bic).subscribe(response=>{
      this.bank= new Bank(response.bic,response.instname);
      });
    }
    this.get1=true;
  }
  onenter(event:any){
    this.transactionService.getCustomer(this.form.value.sender_acc_id).subscribe(response=>{
      this.cust= new customer(response.id,response.holder_name,response.clear_balance,response.type,response.overdraft);
    this.get1=false;
    this.get=false;
    this.dropdown=false;
      if(event.target.value.length==14 ){
       
      if( this.cust.type==="bank"){
    
      this.dropdown=true;
      this.transactionService.getBankCustomer(this.form.value.sender_acc_id).subscribe(response=>{
        {
        this.bankdrp=response.map(item=>{
         return  new customer(item.id,item.holder_name,item.clear_balance,item.type,item.overdraft);
        })
         
      }});
      
    } 
    this.get=true;
  }
  
  });

  }
  ngOnInit(): void {
   
      
  }
}
