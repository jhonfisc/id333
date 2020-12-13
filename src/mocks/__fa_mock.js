const head = {
    "tipo-registro": "01", // n,l-2
    "nit-empresa": "8000000-11", // n,l-10  nit mc
    "nit-adicional": "0000000000", // n,l-10
    "codigo-entidad-financiera": "000", // n,l-3
    "fecha-creacion-archivo": "20201114", // AAAAMMDD
    "modificador-archivo": "1" // A-Z0-9 incremental
    // rerservado 182 blanco
};

const details = {
    "lote": {
        "tipo-registro": "05",
        "numero-documento": "0000001000000",
        "tipo-documento": "FA",
        "numero-lote": "0001",
        "descripcion": "fac. 11 de 2020", // t,l-15 // reservado 186 espacio blanco
    },
    "detalle": 
            [
                {
                    "tipo-registro": "06", // n,l-2
                    "referencia": "000000000000000000000000000000000000000000000001", //n,l-48
                    "referencia-secundaria": "00000000000000000000000000000000", // n,l-32
                    "periodos-facturados": "01", // n,l-2
                    "ciclo": "   ", // t,l-3
                    "valor-factura": "00000001000000", // n,l-14
                    "codigo-servicio": "0000000000000", // n,l-13
                    "valor-servicio-adicional": "00000000000000", // n,l-14
                    "fecha-vencimiento": "20201115", //AAAAMMDD
                    "identificacion-efr": "00000000", // n,l-8
                    "numero-cuenta-receptor": "                 ", // t,l-17
                    "tipo-cuenta-receptor": "00", //n,l-2
                    "nombre-cliente": " prueba de facturacion", // t,l-22
                    "codigo-entidad-financiera": "   ", // t,l-3
                    "numero-cuotas-tarjeta": "00", // n,l-2
                    "secuencia": "0000001", // n,l-7
                    "reservado": "       " // l-7
                }, 
                {
                    "tipo-registro": "06", // n,l-2
                    "referencia": "000000000000000000000000000000000000000000000001", //n,l-48
                    "referencia-secundaria": "00000000000000000000000000000000", // n,l-32
                    "periodos-facturados": "01", // n,l-2
                    "ciclo": "   ", // t,l-3
                    "valor-factura": "00000001000000", // n,l-14
                    "codigo-servicio": "0000000000000", // n,l-13
                    "valor-servicio-adicional": "00000000000000", // n,l-14
                    "fecha-vencimiento": "20201115", //AAAAMMDD
                    "identificacion-efr": "00000000", // n,l-8
                    "numero-cuenta-receptor": "                 ", // t,l-17
                    "tipo-cuenta-receptor": "00", //n,l-2
                    "nombre-cliente": " prueba de facturacion", // t,l-22
                    "codigo-entidad-financiera": "   ", // t,l-3
                    "numero-cuotas-tarjeta": "00", // n,l-2
                    "secuencia": "0000002", // n,l-7
                    "reservado": "       " // l-7
                },
                {
                    "tipo-registro": "06", // n,l-2
                    "referencia": "000000000000000000000000000000000000000000000001", //n,l-48
                    "referencia-secundaria": "00000000000000000000000000000000", // n,l-32
                    "periodos-facturados": "01", // n,l-2
                    "ciclo": "   ", // t,l-3
                    "valor-factura": "00000001000000", // n,l-14
                    "codigo-servicio": "0000000000000", // n,l-13
                    "valor-servicio-adicional": "00000000000000", // n,l-14
                    "fecha-vencimiento": "20201115", //AAAAMMDD
                    "identificacion-efr": "00000000", // n,l-8
                    "numero-cuenta-receptor": "                 ", // t,l-17
                    "tipo-cuenta-receptor": "00", //n,l-2
                    "nombre-cliente": " prueba de facturacion", // t,l-22
                    "codigo-entidad-financiera": "   ", // t,l-3
                    "numero-cuotas-tarjeta": "00", // n,l-2
                    "secuencia": "0000003", // n,l-7
                    "reservado": "       " // l-7
                }
            ],
    "control-lote": {
        "tipo-registro": "08", // n,l-2
        "total-registros": "000000003", // n,l-3
        "valor-servicio": "000000000003000000", // n,l-18
        "valor-servicio-adicional": "000000000000000000", // n,l-18
        "numero-lote": "0001"
        // reservado 168 espacio blanco
    }
};

const footer = {
    "tipo-registro": "09",
    "total-registros-detalle": "000000003", // n,l-9
    "valor-total": "000000000003000000", // n,l-18
    "valor-total-servicio-adicional": "000000000000000000", // n,l-18
     // reservado 173 espacio blanco
};

const info = { head, footer, details };
export { info };