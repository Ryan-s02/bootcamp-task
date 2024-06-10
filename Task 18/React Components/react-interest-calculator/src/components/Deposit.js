import React from 'react';
import { useState } from 'react';
//importing styling components from bootstrap
import { Button, FormControl, InputGroup } from 'react-bootstrap';


//a function to allow the user to add money to their balance
function Deposit({deposit}){

    //configuring the useState hook
    const [amount, setAmount] = useState(0);

    //handling the amount selected by the user, adding it to the balance
    function HandleDeposit(){
        const numberAmount = Number(amount);
        if(numberAmount > 0){
            deposit(numberAmount);
            //after the amount is deposited, the field is cleared
            setAmount('');
        }else {
            alert('Enter a valid amount');
        }
    };

    // enabling the return key to trigger the button click
    function handleKeyPress(event){
        if(event.key === 'Enter'){
            HandleDeposit()
        }
    }
    return(
        <InputGroup className='mb-3'>
            <FormControl
            value={amount} 
            type='number' 
            id='user-input-deposit' 
            placeholder='Amount to deposit' 
            onChange={(e) => setAmount(e.target.value)}
            onKeyDown={handleKeyPress}/>
            <Button onClick={HandleDeposit}>Deposit</Button>
        </InputGroup>
    )
}

export default Deposit;