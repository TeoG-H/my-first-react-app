import React, { useState } from "react"

function InputText (){

    const [name, setName]=useState("Guest");
    const[payment, setPayment]=useState("Visa");
    const[shipping, setShipping]=useState("");

    function handleNameChange(event){
        setName(event.target.value);
    };

    function handlePaymentChange(event){
        setPayment(event.target.value);
    };

    function handleShippingChange(event){
        setShipping(event.target.value);
    };


return(<>
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name} </p>
        </div>
        <p>Payment method : {payment} </p>
        <select value={payment} onChange={handlePaymentChange}>
                <option value=""> Select </option>
                <option value="VISA"> Visa </option>
                <option value="Mastercard"> Mastercard </option>
                <option value="Giftcard"> Giftcard</option>
        </select>
        <br/>

        <p>
            Shippin method: {shipping}
        </p>
        <label>
            <input type="radio" value="Pick Up" checked={shipping == "Pick Up"} 
            onChange={handleShippingChange}
            />
            Pick Up 
        </label>
        <br/>
        <label>
            <input type="radio" value="Delivery" checked={shipping == "Delivery"} 
            onChange={handleShippingChange}
            />
            Delevery
        </label>
        

</>);
}

export default InputText