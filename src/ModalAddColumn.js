import React, { useEffect, useState } from 'react';
import "./Modal.css"; 

function ModalAddColumn(props) {
    const [formSubmission, setFormSubmission] 
    = useState([{}]); 
       // [{productID: null, description: null, quantity: null, unit_price: null, unit_measure: null, subtotal:null}]);  
        
    const [subtotal,setSubtotal] = useState(0); 


 
    
    const handleSubmit = () => {
       // e.preventDefault(); //review this
        //alert("Submitted"); 
        updateFormData("subtotal",subtotal); 
        props.addItem(formSubmission); //TODO
        setFormSubmission([{}]); 
        setSubtotal(0); 
        props.close(); 

    }

    const updateFormData = (a,b) => {
        const tempList = formSubmission; 
        tempList[a] = b;
        setFormSubmission(tempList); 
        //updateSubtotal(); 
    }

    /*
    const updateSubtotal = () => {
        setSubtotal(formSubmission.quantity*formSubmission.unit_price); 

    }
    */

    if(props.visibility===true){
    return (
        <div className="modal">
            <div className="modal__content">
                <div className="modal__head">
                    Add a column
                </div> 
                <div className="modal__body"> 
                    <form >
                       
                        <label>
                            Column Label:
                            <input type="text" onChange={e=>updateFormData("description",e.target.value)}/>
                        </label> <br></br> 
                        <br></br> 
                        <label>
                            Data Type:
                            <select>
                                <option value="float">float</option>
                                <option value="int">int</option>
                                <option value="string">string</option>
                                <option value="bool">bool</option>
                            </select>
                        </label> <br></br> 
                        
                  
                        
                        
                    </form>
                    <br></br>
                    <button onClick={() => handleSubmit()}> Submit </button> 
                </div> 
                <div className="modal__foot">
                    <button onClick={()=> props.close()}> Close </button>

                </div> 
            </div> 


        </div> 

    
    )
    } 
    else{
        return(
            null
        )
    }
}

export default ModalAddColumn;
