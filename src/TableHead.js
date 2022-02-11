import React, { useEffect, useState } from 'react';

function TableHead(props) {
    const [header, setHeader] = useState(props.headerLabels); 


    const update = (n) => {
        props.tableSort(n);          
    }

    const renderHead = (col) => {        
        return(
            <>
                <td className="table__header" onClick={()=> update(col.ref_key)}>{col}</td>
            </>
        );  
    }

    return(
        <tr className='tableHeader'> 
            {header.map(renderHead)}
        </tr> 
    )
    
}

export default TableHead
