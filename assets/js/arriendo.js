const arriendos = [
    {
    nombre: 'Casa en Puente Alto',
    src: './assets/img/img-main.jpeg',
    descripcion: 'Amplia casa, cercana a colegios',
    ubicacion: 'Av. Tobalaba',
    habitaciones: 3,
    banos: 2,
    costo: 2000,
    smoke: true,
    pets: true
    },
        

    ]
    const contenedorArriendo = document.querySelector("#arriendo");
    let html = ''
    for ( const arriendo of arriendos){

        html += `<div class= "card">
        <img src="${arriendo.src}" alt="" class="card img">
        <h2>${arriendo.nombre}</h2>
        <p>${arriendo.descripcion}</p>
        <p>Ubicacion : ${arriendo.ubicacion}</p>
        <p>Habitaciones : ${arriendo.habitaciones}</p>
        <p>Baños : ${arriendo.banos}</p>
        <p>Costo : $${arriendo.costo}</p>
        <p> ${smoke(arriendo.smoke)} </p>
        <p> ${mascota(arriendo.mascota)} </p>
       
          
        
      </div>
        `
    } 

    contenedorArriendo.innerHTML = html

     // Funcion para fumar
     function smoke(fuego){
      let cigarro = ""
    
      if(fuego == true){
        cigarro = " Permitido fumar";
        // cigarro.style.color = 'green';
       
      }else{
        cigarro ="No se permite fumar";
        
      }
      return cigarro
    }



  //  Funcion para mascotas
     function mascota(perro){
      let animal = ""
    
      if(perro == true){
        animal = "Puedes tener mascota";
       
      }else{
        animal ="No puedes tener mascota";
        
      }
      return animal
    }

