import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { customer } from './myform/customer';
import { map, catchError, tap} from 'rxjs/operators';
import { Bank } from './myform/Bank';

import { throwError } from 'rxjs';
import { transaction } from './myform/transaction';
import { transactionpost } from './transactionpost';



@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  url="http://localhost:8080/";
  transac:any;
  private head = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http:HttpClient) {

   }
   public getCustomer(id:String):Observable<customer>{
    
     return this.http.get<customer>(this.url+"customer/"+id);
  
   }
   public getBankCustomer(id:String):Observable<customer[]>{
    
    return this.http.get<customer[]>(this.url+"customr/"+id);
 
  }
   public getBank(id:String):Observable<Bank>{
    
    return this.http.get<Bank>(this.url+"bank/"+id);
  }
  public addTransaction(tran:transaction):Observable<transactionpost>{
    return this.http.post<transactionpost>(this.url+"transaction", JSON.stringify(tran),{headers:this.head})
    ;
  }

  
 
}


