
///Variables
const formulario = document.querySelector('#formulario')
const materiaTexto = document.querySelector('#materiaTexto')
const tareaTexto = document.querySelector('#tareaTexto')
const lista = document.querySelector('#lista')
const tareas = [] 
const fecha = document.querySelector('#fecha')

//Funciones

const agregarTarea = () => {
    const nuevaTarea = {
        tarea: materiaTexto.value,
        materia:tareaTexto.value
    }


    if(nuevaTarea.tarea && nuevaTarea.materia && nuevaTarea.tarea.length>0 && nuevaTarea.materia.length>0){
    tareas.push(nuevaTarea)
    }

    materiaTexto.value = ''
    tareaTexto.value = ''
    console.log(tareas)

}

const mostrarTareas = () => {
    let html = '', i=0
    tareas.forEach((id) => {
        const valores = Object.values(id)
        html += generarUnaTarea(valores[0], valores[1], i++)
    })
    lista.innerHTML = html
}

const generarUnaTarea = (materia,tarea, id) => {
    return `<li id="t${id}"> <span class="materia">${materia}:</span><span class="tarea">${tarea}</span> <span onclick="eliminarTarea(${id})" class="icon-circle-with-cross"></span></li>`
}

const eliminarTarea = (id) => {
    tareas.splice(id , 1)
    mostrarTareas()

}

const obtenerFecha = () => {
    let hoy = new Date();
    let fechaHoy = hoy.toLocaleDateString()
    fecha.innerHTML = fechaHoy
}
obtenerFecha();

//event listeners

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    agregarTarea()
    mostrarTareas()
})

