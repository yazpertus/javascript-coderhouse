
















function calcular_prestamo( monto , cuotas ){

    monto = parseFloat(monto);
    cuotas = parseInt(cuotas);

    let prestamo = 0;

    if( monto > 0 && cuotas == 3 ){
        prestamo = monto + (monto * 0.15);
        return prestamo
    }
    else if( monto > 0 && cuotas == 6){
        prestamo = monto + (monto * 0.30);
        return prestamo
    }
    else if( monto > 0 && cuotas == 12){
        prestamo = monto + (monto * 0.65);
        return prestamo
    }
    else if( monto > 0 && cuotas == 1){
        return monto
    }

}

function es_socio( prestamo , estado_usuario ){

    if( estado_usuario == "SI"){
        //ES SOCIO//
        let descuento =  prestamo - ( prestamo * 0.20 );
        return descuento
    }
    else{
        return 0
    }

}



// PRESTAMO //

console.log("Bienvenido/a a prestamos NOW");

let monto = "";


while( monto != "FIN"){


    monto = prompt("Ingrese el monto que desea o ingrese FIN para finalizar"); 

    if( monto != "FIN"){
        let estado_usuario = prompt("Es socio: SI o NO");
        let cuotas = prompt("Ingrese la cantidad de cuotas 1,3,6 o 12");

        let resultado_prestamo = calcular_prestamo( monto , cuotas);
        let resultado_descuento = es_socio( resultado_prestamo , estado_usuario );


        console.log("Pediste: ", monto);
        console.log("Cuotas: ", cuotas);
        console.log("Devolves: ", resultado_prestamo);

        if( resultado_descuento != 0){
            console.log("Con el descuento de 20% por ser socio: ", resultado_descuento);
        }
    
    }

    
}


/*
const bancos = [
    {
        banco: "Banco de la Nacion",
        monto_minimo: 1500,
        descuento_socios: 0.2,
        interes_30: 7.97,
        interes_60: 15.94,
        interes_90: 23.9,
        interes_180: 47.83,
        interes_365_tna: 97
    },

    {
        banco: "Banco Santander",
        monto_minimo: 500,
        descuento_socios: 0.2,
        interes_30: 8.1,
        interes_60: 16.2,
        interes_90: 32.4,
        interes_180: 48.6,
        interes_365_tna: 97
    },

    {
        banco: "Banco Galicia",
        monto_minimo: 1000,
        interes_30: 8.1,
        interes_60: 16,
        interes_90: 32.4,
        interes_180: 48.6,
        interes_365_tna: 97
    },

    {
        banco: "Banco Provincia",
        monto_minimo: 1000,
        interes_30: 8.1,
        interes_60: 15.94,
        interes_90: 24.3,
        interes_180: 48.6,
        interes_365_tna: 97.2
    },

    {
        banco: "Banco BBVA",
        monto_minimo: 1000,
        interes_30: 7.9,
        interes_60: 15.94,
        interes_90: 24.18,
        interes_180: 48.6,
        interes_365_tna: 97
    },

    {
        banco: "Banco Macro",
        monto_minimo: 1000,
        interes_30: 0.5,
        interes_60: 0.5,
        interes_90: 0.5,
        interes_180: 0.5,
        interes_365_tna: 97
    },

    {
        banco: "Banco HSBC",
        monto_minimo: 300,
        interes_30: 8.1,
        interes_60: 16.2,
        interes_90: 24.3,
        interes_180: 48.6,
        interes_365_tna: 97.2
    },

    {
        banco: "Banco Credicoop",
        monto_minimo: 1000,
        interes_30: 0.5,
        interes_60: 0.5,
        interes_90: 0.5,
        interes_180: 0.5,
        interes_365_tna: 97
    },

    {
        banco: "Banco ICBC",
        monto_minimo: 1000,
        interes_30: 0.5,
        interes_60: 0.5,
        interes_90: 0.5,
        interes_180: 0.5,
        interes_365_tna: 97
    },

    {
        banco: "Banco Ciudad",
        monto_minimo: 1000,
        interes_30: 0.5,
        interes_60: 0.5,
        interes_90: 0.5,
        interes_180: 0.5,
        interes_365_tna: 97
    },
]

*/

/* Calcular los intereses para diferentes plazos
var interes30 = monto * banco.interes_30 / 100;
var interes60 = monto * banco.interes_60 / 100;
var interes90 = monto * banco.interes_90 / 100;
var interes180 = monto * banco.interes_180 / 100;
var interes365 = monto * banco.interes_365_tna / 100;

// Mostrar los resultados
console.log("Resultados del plazo fijo en " + banco.banco + ":");
console.log("Monto ingresado: $" + monto.toFixed(2));
console.log("Intereses a 30 días: $" + interes30.toFixed(2));
console.log("Intereses a 60 días: $" + interes60.toFixed(2));
console.log("Intereses a 90 días: $" + interes90.toFixed(2));
console.log("Intereses a 180 días: $" + interes180.toFixed(2));
console.log("Intereses a 365 días (TNA): $" + interes365.toFixed(2));
}
*/


/*

//ingreso de montos y dias

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
*/
