import React, { useEffect, useState } from "react";
import Tabletop from "tabletop";
import './exceldata.css';

function ExcelData() {
  const [data, setData] = useState({});
  useEffect(() => {
    Tabletop.init({
      key: "1AYDXN9DfgwKYZSVCb71FY8e4jodsyzRVDLQKk_W6YwQ",
      simpleSheet: true,
    }).then(function (data) {
      setData(data);
    });
  }, []);
  const datos = Array.from(data);  
  return (
      <div className="container">

        <div className="caja">
            {
                datos.map((el) =>(
                    <div className="contenedordatos">

                        <div className="datos" key={el.Nombre}>
                            
                            <div className="item" >
                                {el.Nombre}
                            </div>

                            <div className="item">
                                {el.Especialidad}
                            </div>

                            <div className="item">
                                {el.Contacto1}
                            </div>

                            <div className="item">
                                {el.Contacto2}
                            </div>

                            <div className="item">
                                <a href={el.Portafolio} target="_blank" rel="noreferrer">
                                    {el.Portafolio}
                                </a>                               
                            </div>

                            <div className="item">
                                <a href={el.Web} target="_blank" rel="noreferrer">
                                    {el.Web}
                                </a>
                            </div>
                            
                        </div>

                        

                    </div>
                    
                ))
            }
        </div>

    </div>
  );
}

export default ExcelData;