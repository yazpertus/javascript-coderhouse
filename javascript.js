//SIMULADOR PLAZO FIJO DE TODOS LOS BANCOS

let edadUsuario = prompt("Ingrese su edad");

edadUsuario = parseInt(edadUsuario);

if (edadUsuario >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
    document.body.innerHTML = "";
}


function calcular_plazo_fijo( monto , dias ){

    monto = parseFloat(monto);
    dias = parseInt(dias);

    let plazo_fijo = 0;

    if( monto > 0 && dias == 30 ){
        plazo_fijo = monto + (monto * 0.15);
        return plazo_fijo
    }
    else if( monto > 0 && meses == 60){
        plazo_fijo = monto + (monto * 0.30);
        return plazo_fijo
    }
    else if( monto > 0 && dias == 90){
        plazo_fijo = monto + (monto * 0.65);
        return plazo_fijo
    }
    else if( monto > 0 && meses == 1){
        return monto
    }

}

function es_socio( plazo_fijo , estado_usuario ){

    if( estado_usuario == "SI"){
        //ES SOCIO//
        let descuento =  plazo_fijo - ( plazo_fijo * 0.20 );
        return descuento
    }
    else{
        return 0
    }

}



// PRESTAMO //

console.log("Bienvenido/a a su plazo fijo");

let monto = "";


while( monto != "FIN"){


    monto = prompt("Ingrese el monto que desea o ingrese FIN para finalizar"); 

    if( monto != "FIN"){
        let estado_usuario = prompt("Es socio: SI o NO");
        let cuotas = prompt("Ingrese la cantidad de días 30, 60, 90 o más días");

        let resultado_plazo_fijo = calcular_prestamo( monto , dias);
        let resultado_descuento = es_socio( resultado_plazo_fijo , estado_usuario );


        console.log("Pediste: ", monto);
        console.log("Días: ", dias);
        console.log("Devolves: ", resultado_plazo_fijo);

        if( resultado_descuento != 0){
            console.log("Con el descuento de 20% por ser socio: ", resultado_descuento);
        }
    
    }

    
}