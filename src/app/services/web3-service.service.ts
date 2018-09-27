import { Injectable } from '@angular/core';
import Web3 from 'web3';
import { bindNodeCallback, Observable } from 'rxjs';

declare var window: any;

@Injectable({
  providedIn: 'root'
})
export class Web3ServiceService {

  public web3: Web3

  constructor() {
    this.checkAndInstatiateWeb3();
   }

   checkAndInstatiateWeb3 =()=>{
     // Checking if Web3 has been injected by the browser (Mist/MetaMask)
     if(typeof window.web3 !== 'undefined'){
      console.warn(
        'Using web3 detected from external source. If you find that your accounts don\'t appear or you have 0 MetaCoin, ensure you\'ve configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask'
      );
        // Use Mist/MetaMask's provider
        this.web3 = new Web3(window.web3.currentProvider);
        return true;
     }
     else {
      console.warn(
        'No web3 detected. Falling back to ${environment.HttpProvider}. You should remove this fallback when you deploy live, as it\'s inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask'
      );
    return false;
  }
   }

   getAccounts(): Observable<any>{
     return Observable.create(observer=>{
       this.web3.eth.getAccounts((err, accouts)=>{
         if(err) {
          observer.error('There was an error fetching your accounts.')
         }
         if(accouts.length == 0){
          observer.error('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.')

         }
         observer.next(accouts)
         observer.complete()

     })

   }
}
getBalance(account): Observable<any>{
  return Observable.create(observer=>{
    this.web3.eth.getBalance(account, (err, balance)=>{
      if(err){
        observer.error('there was an error fetching account balance')
      }
      observer.next(this.web3.fromWei(balance, 'ether'));
      observer.complete();
    })
  })
}
}
