const nombre=document.getElementById('nombre')
const curso=document.getElementById('curso')
const genero=document.getElementById('genero')
const nota1=document.getElementById('nota1')
const nota2=document.getElementById('nota2')
const nota3=document.getElementById('nota3')
const tabla=document.getElementById('tabla')
let promedio=null
let estado=null
const registrar=document.getElementById('registrar')
let myBoys=[]
const myModal = document.getElementById('registrarEstudiante')
let lista=JSON.parse(localStorage.getItem('estudiantes'))
document.addEventListener('DOMContentLoaded',pintar)

registrar.addEventListener('click',()=>{   
    if(nombre.value=='' || curso.value=='' || genero.value=='' || nota1.value=='' || nota2.value=='' || nota3.value==''){
        alert('hay notas vacias')
    } else{
    promedio=+((+nota1.value+ +nota2.value+ +nota3.value)/3).toFixed(2)
    promedio>=3.5?estado='Aprobado':estado='Reprobado'
    }
    if (lista==null){
            myBoys=[]
            myBoys.push({nombre:nombre.value,curso:curso.value,genero:genero.value,nota1:nota1.value,nota2:nota2.value,nota3:nota3.value,promedio:promedio,estado:estado})
            localStorage.setItem('estudiantes',JSON.stringify(myBoys))
            pintar()
           
    }else{
            myBoys=[]
            for(i=0;i<lista.length;i++){
                myBoys.push(lista[i])
                console.log(myBoys[i])
            }
            myBoys.push({nombre:nombre.value,curso:curso.value,genero:genero.value,nota1:nota1.value,nota2:nota2.value,nota3:nota3.value,promedio:promedio,estado:estado})
            localStorage.setItem('estudiantes',JSON.stringify(myBoys))
            pintar()
        }
  
    
    const modal = bootstrap.Modal.getInstance(myModal);    
    modal.hide();
    nombre.value=''
    curso.value=''
    genero.value=''
    nota1.value=''
    nota2.value=''
    nota3.value=''
})

function pintar(){
    lista=JSON.parse(localStorage.getItem('estudiantes'))
        myBoys=[]
        tabla.innerHTML=`<tr>
        <th>Nombre</th>
        <th>Curso</th>
        <th>Genero</th>
        <th>Nota 1</th>
        <th>Nota 2</th>
        <th>Nota 3</th>
        <th>Promedio</th>
        <th>Estado</th>
    </tr>`
        if(lista==null){
            console.info(lista)
        }else{
            let datoEstudiante=''
            for(i=0;i<lista.length;i++){
                myBoys.push(lista[i])
            }
      
            for(i=0;i<myBoys.length;i++){
                datoEstudiante+=`<td>${myBoys[i].nombre}</td>
                <td>${myBoys[i].curso}</td>
                <td>${myBoys[i].genero}</td>
                <td>${myBoys[i].nota1}</td>
                <td>${myBoys[i].nota2}</td>
                <td>${myBoys[i].nota3}</td>
                <td>${myBoys[i].promedio}</td>
                <td>${myBoys[i].estado}</td></tr>`
                
            }
            tabla.innerHTML+=datoEstudiante
        }
               
        }
        

       
       
