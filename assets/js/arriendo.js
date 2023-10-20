const arriendos = [ {
    nombre: 'Casa en La Florida Alto',
    src: './assets/img/img-main.jpeg',
    descripcion: 'Amplia casa, cercana a metro',
    ubicacion: 'Vicuña Mackenna',
    habitaciones: 3,
    banos: 2,
    costo: 2000,
    smoke: true,
    pets: true,
  },  
  {
    nombre: 'Casa en Puente Alto',
    src: './assets/img/img-main.jpeg',
    descripcion: 'Amplia casa, cercana a colegios',
    ubicacion: 'Av. Tobalaba',
    habitaciones: 3,
    banos: 2,
    costo: 5000,
    smoke: false,
    pets: false,
  }, 
  {
    nombre: 'Departamento en Majadilla',
    src: './assets/img/img-main.jpeg',
    descripcion: 'Con vista al rio',
    ubicacion: 'Ruta J60',
    habitaciones: 4,
    banos: 2,
    costo: 4500,
    smoke: false,
    pets: true,
  }, 
  {
    nombre: 'Casa en Maipu',
    src: './assets/img/img-main.jpeg',
    descripcion: 'Amplia casa, cercana a colegios',
    ubicacion: 'Av. Tobalaba',
    habitaciones: 3,
    banos: 1,
    costo: 3000,
    smoke: true,
    pets: false,
  }, 
]

    
    const contenedorArriendo = document.querySelector("#arriendo");



    for ( let arriendo of arriendos){
        
        let autorizacionFumar = sePuedeFumar(arriendo.smoke);
        let autorizacionMacota = sePuedeTenerMAscotas(arriendo.pets);
        let html = `<div class= "card">
        <img src="${arriendo.src}" alt="" class="card img">
        <h2>${arriendo.nombre}</h2>
        <p>${arriendo.descripcion}</p>
        <p>Ubicacion : ${arriendo.ubicacion}</p>
        <p>Habitaciones : ${arriendo.habitaciones}</p>
        <p>Baños : ${arriendo.banos}</p>
        <p>Costo : $${arriendo.costo}</p>

        ${autorizacionFumar}
        ${autorizacionMacota}
        
         
      </div>`
      contenedorArriendo.innerHTML += html
    } 




    function sePuedeFumar(smoke){
        if(smoke==true){
          let permisoParaFumar = `
          <p class="fuma"> Se permite fumar</p>
          `
          return permisoParaFumar;
        }else{
          let noPermisoParaFumar = `
          <p class="nofuma"> No se permite fumar</p>
            `
            return noPermisoParaFumar;
        }
        
      
    }

    function sePuedeTenerMAscotas(pets){
      if(pets==true){
        let permisoParaMascotas =  `
        <p class="mascota"> Se permiten mascotas</p>
        `
        return permisoParaMascotas;
    } else {
        let noPermisoParaMascotas= `
        <p class="nomascota"> No se permiten mascotas</p>
        `
        return noPermisoParaMascotas;
    }
  
  }