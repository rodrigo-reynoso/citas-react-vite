import Pacientes from "./Pacientes"

function ListadoPacientes({pacientes,setPaciente,eliminarPaciente}) {
 
  return (
    <div className="md:w-1/2 lg:w-3/5 ">
      {pacientes && pacientes.length ? (
        <>
            <h2 className="font-blank text-3xl text-center">Listado Pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
              Administra tus Citas {''}
              <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
            </p>
            <div className="md:h-screen md:overflow-y-scroll ">
            { pacientes.map((pacienteMap)=>(
                <Pacientes
                  key={pacienteMap.id} 
                  pacienteMap={pacienteMap}
                  setPaciente={setPaciente}
                  eliminarPaciente={eliminarPaciente}
                />
            ))}  
            </div>
        </>
      ):(
        <>
          <h2 className="font-blank text-3xl text-center">No Hay Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
                Comienza agregando Pacientes {''}
                <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
          </p>
        </>
      )}

    </div>
  )
}

export default ListadoPacientes


