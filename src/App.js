import 'semantic-ui-css/semantic.min.css';
import React, { Component } from 'react';
import { Button, Form, Container, Header } from 'semantic-ui-react';
import axios from 'axios';
import './App.css';
import ExcelData from './exceldata';
import Footer from './Footer';
 

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       Nombre: '',
       Especialidad: '',
       Contacto1: '',
       Contacto2: '',
       Portafolio: '',
       Web: '',
    }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);

    axios.post('https://sheet.best/api/sheets/952adab9-c60d-4d56-945f-4d550147cfbd', this.state)
    .then(response => {
      console.log(response);
    })
    .then(
      window.location.reload(false)
    )
    
  };

  

  
  
  render() {
    const { Nombre, Especialidad, Contacto1, Contacto2, Portafolio, Web } = this.state;    
    return (
      <div>
      <Container fluid className="container">
        <Header as='h2'>Directorio de especialistas en CM Freelance Perú</Header>
        <Form className="form" onSubmit={this.submitHandler}>
          <Form.Field>
            <label>Nombre</label>
            <input placeholder='Ingresa tu nombre completo' type="text" name = "Nombre" value = {Nombre} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Especialidad</label>
            <input placeholder='Ingresa tus especialidades' type="text" name = "Especialidad" value = {Especialidad} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Contacto1</label>
            <input placeholder='¿Cómo podemos contactarte?' type="text" name = "Contacto1" value = {Contacto1} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Contacto2</label>
            <input placeholder='¿Hay alguna otra forma de contactarte?' type="text" name = "Contacto2" value = {Contacto2} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Portafolio</label>
            <input placeholder='Ingresa tu portafolio' type="text" name = "Portafolio" value = {Portafolio} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Web</label>
            <input placeholder='Ingresa tu web' type="text" name = "Web" value = {Web} onChange={this.changeHandler}/>
          </Form.Field>
          
          <Button color="blue" type='submit'>Enviar</Button>
        </Form>

        <ExcelData />
        
      </Container>

      
        <div>
          <Footer />
        </div>
      
        
      </div>


    )
  }
}