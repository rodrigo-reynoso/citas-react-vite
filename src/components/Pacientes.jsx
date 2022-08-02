
function Pacientes({pacienteMap,setPaciente,eliminarPaciente}) {

  const handleEliminar = ()=>{
    const respuesta = confirm('¿Deseas eliminarlo?')
    if(respuesta){
      setTimeout(()=>{
        eliminarPaciente(pacienteMap.id)
      },400)  
    }
    
  }

  return (
    <div>
        <div className="mt-0 mb-3 mx-5 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">
            Nombre: {''}
            <span className="font-normal normal-case">{pacienteMap.nombre}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
            Propietario: {''}
            <span className="font-normal normal-case">{pacienteMap.propietario}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
            Correo: {''}
            <span className="font-normal normal-case">{pacienteMap.email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
            Alta: {''}
            <span className="font-normal normal-case">{pacienteMap.fecha}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
            Sintomas: {''}
            <span className="font-normal normal-case">{pacienteMap.sintomas}</span>
            </p>
            <div className="flex justify-between mt-10">
              <button
                className="py-2 px-10 uppercase bg-indigo-600 hover:bg-indigo-700  text-white font-bold rounded"
                type="button"
                onClick={()=>setPaciente(pacienteMap)}
              >Editar</button>
              <button
                className="py-2 px-10 uppercase bg-red-600 hover:bg-red-700 text-white font-bold rounded"
                type="button"
                onClick={handleEliminar} // Espera a que ocurra el evento handle
              >Eliminar</button>
            </div>
        </div>
    </div>
  )
}

export default Pacientes