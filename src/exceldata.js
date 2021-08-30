import React, { useEffect, useState } from "react";
import './exceldata.css';

function ExcelData() {
    const [data,setData] =useState();
  const getData=async() =>{
    try {
      const res= await fetch("https://sheet.best/api/sheets/952adab9-c60d-4d56-945f-4d550147cfbd");     
    
      const data= await res.json();
      setData(data);
    } catch(error){
      console.log(error);
    }
  };

  useEffect(()=>{
    getData();
  },[]);

  return (
    <div className="container">
   
    <div className="mapdata">
        {data?.map((item,i)=>(
            <div className="contenedordatos" key={i}>

                <div className="datos">
                    
                    <div className="item" >
                        {item.Nombre}
                    </div>

                    <div className="item">
                        {item.Especialidad}
                    </div>

                    <div className="item">
                        {item.Contacto1}
                    </div>

                    <div className="item">
                        {item.Contacto2}
                    </div>

                    <div className="item">
                        <a href={item.Portafolio} target="_blank" rel="noreferrer">
                            {item.Portafolio}
                        </a>                               
                    </div>

                    <div className="item">
                        <a href={item.Web} target="_blank" rel="noreferrer">
                            {item.Web}
                        </a>
                    </div>
                    
                </div>



                </div>
        ))}
      </div>
     
        

    </div>
  );
}

export default ExcelData;