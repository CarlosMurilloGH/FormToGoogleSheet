import { useState } from "react";
import 'semantic-ui-css/semantic.min.css';
import { Button, Form} from 'semantic-ui-react';
import "./App.css";
import Exceldata from './exceldata';
import Footer from "./Footer";

function App () {
  
  const [data, setData] = useState({
    Nombre: "",
    Especialidad: "",
    Contacto1: "",
    Contacto2: "",
    Portafolio: "",
    Web: "",
    
  });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await fetch(
        "https://sheet.best/api/sheets/952adab9-c60d-4d56-945f-4d550147cfbd",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
     
    } catch (error) {
      console.log(error);
    }
    window.location.reload();
  };
  return (
      <div className="container">
        <div className="title">
          <h1>Directorio de especialistas en CM Freelance Perú</h1>
        </div>
        <div className="formcontainer">

          <Form className="form" onSubmit={handleSubmit}>

              <Form.Field>
                <label>Nombre</label>
                <input placeholder='Ingresa tu nombre completo' type="text" name = "Nombre" value = {data.Nombre} onChange={handleChange}/>
              </Form.Field>

              <Form.Field>
                <label>Especialidad</label>
                <input placeholder='Ingresa tus especialidades' type="text" name = "Especialidad" value = {data.Especialidad} onChange={handleChange}/>
              </Form.Field>

              <Form.Field>
                <label>Contacto1</label>
                <input placeholder='Ingresa tu Celular sin espacios o +' type="text" name = "Contacto1" value = {data.Contacto1} onChange={handleChange}/>
              </Form.Field>

              <Form.Field>
                <label>Contacto2</label>
                <input placeholder='¿Hay alguna otra forma de contactarte?' type="text" name = "Contacto2" value = {data.Contacto2} onChange={handleChange}/>
              </Form.Field>

              <Form.Field>
                <label>Portafolio</label>
                <input placeholder='Ingresa tu portafolio' type="text" name = "Portafolio" value = {data.Portafolio} onChange={handleChange}/>
              </Form.Field>

              <Form.Field>
                <label>Web</label>
                <input placeholder='Ingresa tu web' type="text" name = "Web" value = {data.Web} onChange={handleChange}/>
              </Form.Field>

              <Button color="blue" type='submit'>Enviar</Button>
          </Form>

      </div> 
          
      <div>
          <Exceldata />
      </div>

      <div>
      <Footer />
      </div>

    </div>
  );
};

export default App;