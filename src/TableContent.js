import React, { useEffect, useState } from 'react';
import "./TableContent.css"; 


function TableContent(props) {
    //const [displayList, setDisplayList] = useState(props.content); 
   // const displayList = props.content; 
 
//col_names
//
//{props.headerLabels.map((col_ref) =>

    const renderRows = (item) => {
        return(
            <tr className="tableContent__row">
                {props.headerLabels.map((col_ref) =>
                    
                    <td>
                        {item[col_ref]}
                      
                    </td> 

                )}
                <td>
                    <button>Remove</button>
                </td>
            </tr>
        ); 
    }



    return (
        
        <> 
            {props.row_data_table_content.map(renderRows)} 
        </> 
        
       
    );
}

export default TableContent
