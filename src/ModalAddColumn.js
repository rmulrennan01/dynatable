import React, { useEffect, useState } from 'react';
import "./Modal.css"; 

function ModalAddColumn(props) {
    //const [formSubmission, setFormSubmission] 
   // = useState([{}]); 
       // [{productID: null, description: null, quantity: null, unit_price: null, unit_measure: null, subtotal:null}]);  
    const [col_name, set_col_name] = useState(null); 
    const [col_type, set_col_type] = useState(null); 
    


 
    
   

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
                            <input type="text" onChange={e=>set_col_name(e.target.value)}/>
                        </label> <br></br> 
                        <br></br> 
                        <label>
                            Data Type:
                            <select onChange={e=>set_col_type(e.target.value)}>
                                <option value="float">float</option>
                                <option value="int">int</option>
                                <option value="string">string</option>
                                <option value="bool">bool</option>
                            </select>
                        </label> <br></br> 
                        
                  
                        
                        
                    </form>
                    <br></br>
                    <button onClick={() => props.addItem(col_name,col_type)}> Submit </button> 
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
