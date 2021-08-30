import React, { useEffect, useState } from "react";
import 'semantic-ui-css/semantic.min.css';
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
    <div className="containerdata">
   
    <div className="mapdata">
        {data?.map((item,i)=>(
          <div class="ui cards" key={i}>
            <div class="ui centered card">
              <div class="content">
                
                <div class="header">
                  {item.Nombre}
                </div>

                  <div class="meta">
                    {item.Especialidad}
                  </div>

                  <div class="description">
                    {item.Contacto1}
                  </div>

                  <div class="description">                    
                    <a href={item.Portafolio} target="_blank" rel="noreferrer">
                      {item.Portafolio}
                    </a>
                  </div>

                  <div class="description">
                    <a href={item.Web} target="_blank" rel="noreferrer">
                      {item.Web}
                    </a>
                  </div>
                    
              </div>
                    
            </div>
        </div>
        ))}
      </div>
     
      </div>
     
        

    
  );
}

export default ExcelData;


