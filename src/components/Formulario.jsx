import React, { useState,useEffect } from 'react'
import Pacientes from './Pacientes'
import Error from './Error'

function Formulario({pacientes, setPacientes,paciente,setPaciente}) {
  const [nombre,setNombre] = useState('')
  const [propietario,setPropietario] = useState('')
  const [email,setEmail] = useState('')
  const [fecha,setFecha] = useState('')
  const [sintomas,setSintomas] = useState('')

  const [error,setError] = useState(false)

  // Agregar paciente cuando se edita
  useEffect(()=>{
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  },[paciente])

  const generarId = ()=>{
    const random = Math.random().toString(36)
    const fecha = Date.now().toString(36)
    return fecha + random.substr(2)
  }
  
  const handleSubmit = (e) =>{
    e.preventDefault()

    if([nombre,propietario,email,fecha,sintomas].includes('')){
        setError(true)
        return;
    }
    setError(false)
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    }
    if(paciente.id){// si SE CREO objetoPanciente.id, es decir, QUE SI SE CLICKEO ES PORQUE YA ESTA
      // Editar y actualizar arreglo del state de pacientes
      objetoPaciente.id = paciente.id
      const objetoPacienteActualizado = pacientes.map (pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
      setPacientes( objetoPacienteActualizado )
      setPaciente({})
    } else {
      // Paciente nuevo 
      /* console.log('agrega')****Son buenos para ver la logica*/
      objetoPaciente.id = generarId()
      setPacientes([...pacientes, objetoPaciente])

    }
    // Reiniciar formulario
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center"> Seguimineto Pacientes</h2>
      
      <p className="text-lg mt-5 text-center mb-10">
        Añade Paciente y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form 
          className="bg-white shadow-md rounded-lg py-10 px-5 mx-5 mb-5"
          onSubmit={handleSubmit}
      >            
      {error && <Error><p>Todos los campos son Obligatorios</p></Error> }
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre de la Mascota</label> 
          <input 
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            name="" 
            id="mascota"
            value={nombre}
            onChange={(e)=> setNombre(e.target.value)} 
          />
        </div>
        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre del Propietario</label> 
          <input 
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            name="" 
            id="propietario" 
            value={propietario}
            onChange={(e)=> setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label> 
          <input 
            type="email"
            placeholder="Email del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            name="" 
            id="email" 
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label> 
          <input 
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            name="" 
            id="alta" 
            value={fecha}
            onChange={(e)=> setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label> 
          <textarea
            placeholder="Describe los sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="sintomas" 
            value={sintomas}
            onChange={(e)=> setSintomas(e.target.value)}
          />
        </div>
        <input 
        type="submit"
        className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
        value={ Object.keys(paciente).length > 0 ? "Editar Paciente" : "Agregar Paciente" }
        />
      </form>
    </div>
  )
}

export default Formulario

