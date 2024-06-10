import React from 'react';
import { useState } from 'react';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
//importing styling component from bootstrap
import { Button } from 'react-bootstrap';

function BalanceComponent(){
    const [balance, setBalance] = useState(0);

    //handling deposits
    function deposit(amount){
        //adding the amount to the balance
        setBalance(balance + amount);
    };

    //handling withdrawals
    function withdraw(amount){
        //taking the amount away from the balance
        setBalance(balance - amount);
    }

    function addInterest(){
        //5% interest fee
        const interestRate = 0.05; 
        setBalance(balance + balance * interestRate);
    }

    function applyBankFees(){
        //a flat rate of £10
        const fee = 10; 
        setBalance(balance - fee);
    }

    return(
        <div className='container'>
            {/* displaying the user balance with 2 decimal places */}
            <h1 className='m-3 text-center '>Your current balance is: £{balance.toFixed(2)}</h1>
            <Deposit deposit={deposit} />
            <Withdraw withdraw={withdraw} />

            {/* 2 different coloured buttons, applying a fixed interest and applying a flaat bank fee */}
            <Button variant='success' className='p-2' onClick={addInterest}>Apply Interest</Button>
            <Button variant='danger' className='p-2 m-3' onClick={applyBankFees}>Apply Bank Fees</Button>
        </div>
    );
}

export default BalanceComponent;