const ventas = [
    {
    nombre: 'Casa en La Florida',
    src: './assets/img/img-main.jpeg',
    descripcion: 'Amplia casa, cercana a esta<cion del metro',
    ubicacion: 'Av. Vicuña Mackenna',
    habitaciones: 4,
    banos: 3,
    costo: 5200000,
    smoke: true,
    pets: true
    },
        

    ]
    const contenedorVenta = document.querySelector("#venta");
    let html = ''
    for ( const venta of ventas){

        html += `<div class= "card">
        <img src="${venta.src}" alt="" class="card img">
        <h2>${venta.nombre}</h2>
        <p>${venta.descripcion}</p>
        <p>Ubicacion : ${venta.ubicacion}</p>
        <p>Habitaciones : ${venta.habitaciones}</p>
        <p>Baños :<i class="fas fa-bed"></i>     ${venta.banos}</p>
        <p>Costo : $${venta.costo}</p>
        <p> ${smoke(venta.smoke)} </p>
        <p> ${mascota(venta.mascota)} </p>
       
          
        
      </div>
        `
    } 

    contenedorVenta.innerHTML = html

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

