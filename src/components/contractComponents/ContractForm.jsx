import React from 'react';

const ContractForm = () => {
    return (
        <form method='post'>
            <input type='text' id='firstName' placeholder='first name'></input><br/>
            <input type='text' id='lastName' placeholder='last name'></input><br/>
            <input type='text' id='email' placeholder='email'></input><br/>
            <textarea id='textarena' placeholder='Type some message...'></textarea><br/>
            <button type='submit' id='submitContractBtn'>Submit</button>
        </form>
    )
}

export default ContractForm;