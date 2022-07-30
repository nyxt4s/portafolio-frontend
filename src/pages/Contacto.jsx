import React, { useState } from 'react';

function Contacto() {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('funciona', name +' apellido' +lastName + ' email '+ email);
    }
    
  return (
    <form onSubmit={handleSubmit}>
        <label>nombre:</label> 
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
        <label>Apellido:</label>
        <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}></input>
        <label>Correo:</label> 
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        <input type='button' value='enviar'></input>

    </form>
  )
}

export default Contacto