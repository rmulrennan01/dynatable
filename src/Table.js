import React, { useEffect, useState } from 'react';
import './Table.css'; 
import { render } from 'react-dom';
import TableContent from "./TableContent.js"; 
import TableHead from "./TableHead.js"; 
import TableFoot from "./TableFoot.js";


function Table(props) {

    const [header_labels, set_header_labels] = useState(props.col_names); 
    const [row_data_table, set_row_data_table] = useState(props.row_data); 
   

    /*
    const [displayArray, setDisplayArray] = useState(props.items); 
    const [ascendSort, setAscendSort] = useState(true); 
    const [refresh, setRefresh] = useState(true); 
    //var displayArray = props.items; 



    const tableSort = (n) => {
        const tempList = displayArray; 
       tempList.sort((a,b) => a[n]-b[n]); 
       setDisplayArray(displayArray.map(updateSubtotal)); 
        if(ascendSort ==true){
            setDisplayArray(tempList); 
            setAscendSort(false); 
        }
        else{
            tempList.reverse(); 
            setDisplayArray(tempList);
            setAscendSort(true); 
        } 
        
    }

  


    const removeItem = (n) => {
        const tempList = displayArray;
        tempList.splice(n,1); 
        setDisplayArray(tempList); 
        setRefresh(!refresh); //only way to get dom to re-render by adding this prop alteration

    }
    */ 



    return (
        <div>
            <table>
                <TableHead headerLabels={header_labels}/> 
                <TableContent headerLabels = {header_labels} row_data_table_content={row_data_table}    />     
               
                


            </table>
            
        </div>
    )
}

export default Table
