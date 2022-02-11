import React, { useEffect, useState } from 'react';
import Modal from "./Modal.js"; 
import ModalAddColumn from './ModalAddColumn.js';
import Table from "./Table.js"; 


function Home() {
    const [tHeaders, set_tHeaders] = useState(["a","b","c"]); //key:string
    const [tData, set_tData] = useState([{a:1,b:2,c:3},{a:4,b:5,c:6}]);  //key:string
    const [modalVisible, setModalVisible] = useState(false); 
    const [modal2Visible, setModal2Visible] = useState(false); 
    const [column_count, set_column_count] = useState(0); 


    const add_tHeader = (col_name,col_type) => {
        const temp_tHeaders = tHeaders;  
        
        temp_tHeaders.push(col_name); 
        set_tHeaders(temp_tHeaders); 
        set_column_count(column_count+1); 
        
    }

    const add_tRow = () =>{
        const partial_data = []; 
        for (let i = 0; i< column_count; i++){
            partial_data.push([]); 
        }
        const temp_tData = tData; 
        tData.push()
        console.log(tData); 
    }

    const add_tData = (col, data) => {
        //TODO
    }

   

  return ( 
        <div>
            <button onClick={()=>setModal2Visible(true)}> Add Column </button> 
            <button> Add Row </button>


            <button onClick={()=>setModalVisible(true)}> Add Data </button> 
            <ModalAddColumn visibility={modal2Visible} close={()=>setModal2Visible(false)} addItem={add_tHeader}/> 
            <Modal visibility={modalVisible} close={()=>setModalVisible(false)} addItem={()=>alert("hey")}/> 
            <Table col_names={tHeaders} row_data={tData}/> 
        </div>
  )
}

export default Home;
