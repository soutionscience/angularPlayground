import { Injectable } from '@angular/core';
import Web3 from 'web3';
import { bindNodeCallback, Observable, observable } from 'rxjs';
import { runInThisContext } from 'vm';
import { async } from '@angular/core/testing';
let contractDef = require('../../ethereum/contracts/tutorial.json')


declare var window: any;
declare var require: any

let campaignFactory = require('../../ethereum/contracts/LeagueFactory.json')

@Injectable({
  providedIn: 'root'
})
export class Web3ServiceService {
  public web3: Web3
  constructor() {this.checkAndInstatiateWeb3();}

  checkAndInstatiateWeb3 =()=>{
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    //  console.log("testing", campaignFactory)
     if (typeof window.web3 !== 'undefined') {
      console.warn(
        'Using web3 detected from external source. If you find that your accounts don\'t appear or you have 0 MetaCoin, ensure you\'ve configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask'
      );
      // Use Mist/MetaMask's provider
      this.web3 = new Web3(window.web3.currentProvider);
      return true;
    } else {
      console.warn(
        'No web3 detected. Falling back to ${environment.HttpProvider}. You should remove this fallback when you deploy live, as it\'s inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask'
      );
      return false;
      // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
      // this.web3 = new Web3(
      //   new Web3.providers.HttpProvider(environment.HttpProvider)
      // );
    }

  }

  //check metamsk version
  checkversion(): Observable<any>{
  //  return this.web3.version.getNode(function(err, result){
  //     if(err){
  //       return err;
  //     }else{
  //       console.log("result has", result)
  //       return result
  //     }
  //   })
  return Observable.create(observer=>{
    this.web3.version.getNode(function(err, result){
      if(err){
        observer.error("there was an error getting info")
      }else{
        observer.next(result);
        observer.complete()
      }
    })
  })
  }


  //connect to testRPC
  connectRpc(url){
    console.log("connecting to .. ", url)
    this.web3 = new Web3(new Web3.providers.HttpProvider(url))

  }

   getAccounts(): Observable<any>{
     return Observable.create(observer=>{
       this.web3.eth.getAccounts((err, accouts)=>{
         if(err) {
          observer.error('There was an error fetching your accounts.');
         }
         if(accouts.length == 0){
          observer.error('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.');

         }
         observer.next(accouts);
         observer.complete();

     })

   })
}

getBalance(account): Observable<any>{ //get accounts balance
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
  doUnlock(number, password): Observable<any>{
    return Observable.create(observer=>{
    this.web3.personal.unlockAccount(number, password, function(err, result){
      if(err){
        observer.error('there was an error fetching account balance')
      
      }else{
        if(result){
         observer.next(result)
         observer.complete()
        }
      }

    })
  })
}

doSendTransaction(transactionObject):Observable<any>{
  return Observable.create(observer=>{
    transactionObject.value = this.web3.toWei(transactionObject.value, 'ether');
    console.log('transaction ', transactionObject.value)


    this.web3.eth.sendTransaction(transactionObject, function(err, result){
      if(err){
        observer.error("sending transaction has error", err)
      }
      // console.log("waht is here? ", transactionObject)
      observer.next(result)
      observer.complete()
    })

  })
}

//compile raw solidity code
doCompileSolidityCode(code):Observable<any>{

 code = this.flattenSource(code);
  
  return Observable.create(observer=>{
    this.web3.eth.compile.solidity(code, function(err, result){
      if(err){ console.log("this ama ", err)
              observer.error("compile error ", err)
      }else{
        console.log('what is the result then', result)
        observer.next(result);
        observer.complete()
      }
    
      
    })

  })

}

flattenSource(src){
  return src.replace(/\n/g, ' ');
}
async createTransactionHash(transactionHash){
  let FinalTransactionHash = await this.web3.eth.getTransactionReceipt(transactionHash, (err, result)=>{
    if(err){
      console.log("error deploying contract ", err);
      return err
    }else{
      console.log("deployed successfully")
      return result
 
    }
  })

}

 doDeployContract = (byteCode, abiDef, gas): Observable<any>=>{

 
    return Observable.create(observer=>{
  let contract = this.web3.eth.contract(abiDef)
  console.log("hitting web3 service ", contract)
  // 2. Create the params for deployment - all other params are optional, uses default
  let  params = {
   from: this.web3.eth.coinbase,
   data: byteCode,
   gas: gas
 }
 let contractData = contract.new.getData(10,{'data':byteCode});
//  console.log('contract data ', contractData)
 params.data=contractData;
let transactionHash= this.web3.eth.sendTransaction(params, (err, result)=>{
  if(err){
    console.log("error creatting transaction Hash")
    observer.error("deploy error ", err)
  }else{
    console.log('transaction hash created')
    observer.next(result);
    observer.complete();
  }

})


  
 })


}

getMyTransactionReceipt(transactionHash): Observable<any>{
  return Observable.create(observer=>{
     this.web3.eth.getTransactionReceipt(transactionHash, (err, result)=>{
   if(err){
     console.log("error deploying contract ", err);
     observer.error("deploy error ", err)
   }else{
     console.log("deployed successfully")
     observer.next(result);
     observer.complete();

   }

 })

  })

}
//create contract instance from deployed contract
createContractInstance(addr){
 
  let abiDef = contractDef.abi;
  let contract = this.web3.eth.contract(abiDef);
  let address = addr;
  let instance = contract.at(address);
  return instance;

}

setNumSend(address, amount, gas ):Observable<any>{
  console.log("hitting service")
  return Observable.create(observer=>{

  let instance = this.createContractInstance(address);
  console.log('set number clicked: intance', instance);
  let transactionObject ={
    from: this.web3.eth.coinbase,
    gas: gas
  }

  instance.setNum.sendTransaction(amount, transactionObject, (err, result)=>{
    if(err){
      console.log('error sending tranascationt ', err)
      observer.error(err)
    }else{
      console.log('transaction send succesfully ', result)
      observer.next(result);
      observer.complete();
    }
  })

  
})
}
getNum(address, gas ):Observable<any>{
  return Observable.create(observer=>{
    let instance = this.createContractInstance(address);
    let transactionObject ={
      from: this.web3.eth.coinbase,
      gas: gas
    }
    instance.getNum.sendTransaction(transactionObject, (err, result)=>{
      if(err){
      console.log('error geting num ', err)
      observer.error(err)
      }
      else{
        console.log('returned value', result);
        observer.next(result);
        observer.complete()

      }
    })
  })

}


}
