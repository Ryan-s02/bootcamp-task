import { useState } from "react";
import React from "react";
//importing styling components from bootstrap
import { FormControl, InputGroup, Button } from "react-bootstrap";

//function for the user to withdraw money from the balance
function Withdraw({withdraw}){

    // configuring the use state hook
    const [amount, setAmount] = useState(0);

    //the amount selected by the user is taken from the balance
    function HandleWithdraw(){
        const numberAmount = Number(amount);
        if(numberAmount > 0){
            withdraw(numberAmount);
            //after the amount is deposited, the field is cleared
            setAmount('');
        }else {
            alert('Enter a valid amount');
        }
    };

    //enabling the return key to trigger the button click
    function handleKeyPress(event){
        if(event.key === 'Enter'){
            HandleWithdraw()
        }
    }
    return(
        // return JSX with an input field for withdrawing amount syled with bootstrap
            <InputGroup>
            <FormControl
            value={amount} 
            type='number' 
            id='user-input-withdraw' 
            placeholder='Amount to withdraw' 
            onChange={(e) => setAmount(e.target.value)}
            onKeyDown={handleKeyPress}/>
            <Button onClick={HandleWithdraw}>Withdraw</Button>
            </InputGroup>
    )

}


export default Withdraw;