import React, { useEffect, useState } from 'react';
import Modal from "./Modal.js"; 
import ModalAddColumn from './ModalAddColumn.js';
import Table from "./Table.js"; 


function Home() {
    const [tHeaders, set_tHeaders] = useState([]); //key:string
    const [tData, set_tData] = useState([]);  //key:string
    const [modalVisible, setModalVisible] = useState(false); 
    const [modal2Visible, setModal2Visible] = useState(false); 


    const add_THeader = (col_name,col_type) => {
        const temp_tHeaders = tHeaders;  
        
        temp_tHeaders.push(col_name); 
        set_tHeaders(temp_tHeaders); 
        console.log(tHeaders); 
    }

    const add_tData = (col, data) => {
        //TODO
    }

   

  return ( 
        <div>
            <button onClick={()=>setModal2Visible(true)}> Add Column </button> 

            <button onClick={()=>setModalVisible(true)}> Add Data </button> 
            <ModalAddColumn visibility={modal2Visible} close={()=>setModal2Visible(false)} addItem={add_THeader}/> 
            <Modal visibility={modalVisible} close={()=>setModalVisible(false)} addItem={()=>alert("hey")}/> 
            <Table col_names={tHeaders} /> 
        </div>
  )
}

export default Home;
