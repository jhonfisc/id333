import { objAsobancaria } from '../dataDefinition/asobancaria';

const completeData = (data, length, decimals = false) => {
    const dataLength = data.toString().trim().length;
    if (dataLength === length || dataLength > length) return data;
    if (decimals) return `${data.padStart(length - 2, '0')}00`;
    return `${data.padStart(length, '0')}`;
};

const dataTranformation = (data) => {
    const totalRegisters = data.details.length;
    const detalle = [];
    let total = 0;
    for( let i = 0; i < totalRegisters; i += 1) {
        const objDetalle = { ...objAsobancaria.detalleArchivo };
        total = total + parseInt(data.details[i].C3);
        objDetalle.c2 = completeData(data.details[i].C2, objDetalle.c2.length, false);
        objDetalle.c3 = completeData(data.details[i].C3, objDetalle.c3.length, true);
        objDetalle.c10 = completeData((i + 2).toString(), objDetalle.c10.length);
        detalle[i] = objDetalle;
    }
    const obj = {
        totalRegisters: totalRegisters,
        total: total,
        detalleArchivo: detalle
    };
    return obj;
};

const readData = (obj) => {
    let data = '';
    for(const key in obj) {
        data = `${data}${obj[key]}`;
    }
    return `${data}\r\n`;
};

export { dataTranformation, completeData, readData };