const ventas = [
  {
    nombre: 'Casa en La Florida',
    src: './assets/img/img-main.jpeg',
    descripcion: 'Amplia casa, cercana a esta<cion del metro',
    ubicacion: 'Av. Vicuña Mackenna',
    habitaciones: 4,
    banos: 3,
    costo: 3500000,
    smoke: true,
    pets: true
    },
        
    {
    nombre: 'Departamento en La Florida',
    src: './assets/img/img-main.jpeg',
    descripcion: 'Amplia casa, cercana a esta<cion del metro',
    ubicacion: 'Av. Vicuña Mackenna',
    habitaciones: 2,
    banos: 2,
    costo: 5200000,
    smoke: false,  
    pets: true,
    },

    {
    nombre: 'Casa en La Granja',
    src: './assets/img/img-main.jpeg',
    descripcion: 'cercana a colegios',
    ubicacion: 'Villa los pensamientos',
    habitaciones: 4,
    banos: 3,
    costo: 4500000,
    smoke: true,
    pets: false
    },

    {
    nombre: 'Casa en Providencia',
    src: './assets/img/img-main.jpeg',
    descripcion: 'Barrio comercial',
    ubicacion: 'Carlos Antunez',
    habitaciones: 4,
    banos: 3,
    costo: 10000000,
    smoke: false,
    pets: false
     },

    ]
    const contenedorVenta = document.querySelector("#venta");


  
    for ( let venta of ventas){

        let autorizacionFumar = sePuedeFumar(venta.smoke);
        let autorizacionMacota = sePuedeTenerMAscotas(venta.pets);
        let html = `<div class= "card">
        <img src="${venta.src}" alt="" class="card img">
        <h2>${venta.nombre}</h2>
        <p>${venta.descripcion}</p>
        <p>Ubicacion : ${venta.ubicacion}</p>
        <p>Habitaciones : ${venta.habitaciones}</p>
        <p>Baños : ${venta.banos}</p>
        <p>Costo : $${venta.costo}</p>

        ${autorizacionFumar}
        ${autorizacionMacota}
        
         
      </div>`
      contenedorVenta.innerHTML += html
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