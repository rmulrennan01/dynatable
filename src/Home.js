import React, { useEffect, useState } from 'react';
import Modal from "./Modal.js"; 
import ModalAddColumn from './ModalAddColumn.js';


function Home() {
    const [tHeaders, set_tHeaders] = useState([]); //key:string
    const [tData, set_tData] = useState([]);  //key:string
    const [modalVisible, setModalVisible] = useState(false); 
    const [modal2Visible, setModal2Visible] = useState(false); 


    /*
    const [tableData, setTableData] = useState([
        {productID: "123564", description: "HOT DIPPED GALVANIZED NAILS - 2,000 COUNT", quantity: 12, unit_price: 13.00, unit_measure: "BX", subtotal: 0},
        {productID: "235444", description: "GAF TIMBERLINE HDZ - 3 BUNDLES", quantity: 560, unit_price: 96.23, unit_measure: "SQ", subtotal: 0},
        {productID: "568455", description: "GAF TIMBERLINE - TIMBERTEX RIDGE", quantity: 5, unit_price: 10.00, unit_measure: "BUNDLES", subtotal: 0},
        {productID: "987746", description: "W-VALLEY METAL - GALVE BRONZE", quantity: 4, unit_price: 75.10, unit_measure: "PIECES", subtotal: 0},
        {productID: "587746", description: "GRACE HIGH-TEMP IWS", quantity: 2, unit_price: "142.00", unit_measure: "ROLL", subtotal: 0},
        {productID: "347726", description: "GAF FELTBUSTER - UNDERLAYMENT", quantity: 1, unit_price: 95.00, unit_measure: "ROLLS", subtotal: 0},
        {productID: "187746", description: "GEOCEL CLEAR CAULK", quantity: 18, unit_price: 6.45, unit_measure: "TUBES", subtotal: 0},
        {productID: "017746", description: "GAF STARTER", quantity: 15, unit_price: 68.00, unit_measure: "BUNDLES", subtotal: 0}
      ]); 
      const [tableHeader,setTableHeader] = useState(
            [   {ref_key:"productID", displayName:"Product ID"},
            {ref_key:"description", displayName:"Description"},
            {ref_key:"quantity", displayName:"Quantity"},
            {ref_key:"unit_measure", displayName:"Unit Measure"},
            {ref_key:"unit_price", displayName:"Unit Price ($)"},
            {ref_key:"subtotal", displayName:"Subtotal ($)"}
            ]); 

        */ 

    


  return ( 
        <div>
            <button onClick={()=>setModal2Visible(true)}> Add Column </button> 

            <button onClick={()=>setModalVisible(true)}> Add Data </button> 
            <ModalAddColumn visibility={modal2Visible} close={()=>setModal2Visible(false)} addItem={()=>alert("hey")}/> 
            <Modal visibility={modalVisible} close={()=>setModalVisible(false)} addItem={()=>alert("hey")}/> 
        </div>
  )
}

export default Home;
