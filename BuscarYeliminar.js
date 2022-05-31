function destroyer() {
    let argumentos =[...arguments];
    let primerArgumento = argumentos[0];
    let argumentoEliminar = Array.from(primerArgumento)
    let restoArgumento = argumentos.slice(1);
    console.log("Primer argumento",primerArgumento)
    primerArgumento.map((number,index) => {
      console.log("Number",number)
      if(restoArgumento.includes(number)){
       for(var i = 0; i < argumentoEliminar.length; i++){
          if(argumentoEliminar[i]==number){
            argumentoEliminar.splice(i,1)
            console.log("Despues de eliminar",argumentoEliminar)
            break;
          }
       }
      }
    } )
    //console.log(argumentoEliminar)
  }
  
  destroyer([1, 2, 3, 2, 1, 3], 1, 3);