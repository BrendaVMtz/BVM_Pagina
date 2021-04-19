

///Variables
const formulario = document.querySelector('#formulario')
const materiaTexto = document.querySelector('#materiaTexto')
const tareaTexto = document.querySelector('#tareaTexto')
const lista = document.querySelector('#lista')
const tareas = [] 
const materias = []

//Funciones

const agregarTarea = () => {
    const nuevaTarea = (tareaTexto.value )
    const nuevaMateria = (materiaTexto.value)


    if(nuevaMateria && nuevaMateria.length>0){
        materias.push(nuevaMateria)
    }

    if(nuevaTarea && nuevaTarea.length > 0){
        tareas.push(nuevaTarea)
    }

    materiaTexto.value = ''
    tareaTexto.value = ''
   

}

const mostrarTareas = () => {
    let html = ''
    tareas.forEach((tarea, id) => {
        html += generarUnaTarea(tarea, id)
    })
    lista.innerHTML = html
}

const generarUnaTarea = (tarea, id) => {
    return `<li id="t${id}">${tarea}<span>❌ </span></li>`
}



//event listeners

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    agregarTarea()
    mostrarTareas()
})


