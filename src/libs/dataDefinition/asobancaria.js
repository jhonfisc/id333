
const fecha = new Date();

const getDate = () => {
    let day = fecha.getDate();
    let month = fecha.getMonth();
    const year = fecha.getFullYear();
    if (day.length === 1) day = `0${day}`;
    if (month.length === 1) month = `0${month}`;
    return `${year}${month}${day}`;
};

const getHour = () => {
    let hour = fecha.getHours();
    let minute = fecha.getMinutes();
    if (hour.length === 1) hour = `0${hour}`;
    if (minute.length === 1) minute = `0${minute}`;
    return `${hour}${minute}`;
}; 
const encabezadoArchivo = {
    c1: '01',
    c2: '8190069668',
    c3: getDate(),
    c4: '000',
    c5: '00000000000000000',
    c6: getDate(),
    c7: getHour(),
    c8: 'A',
    c9: '02',
    c10: '                                                                                                           '
};
const encabezadoLote = {
    c1: '05',
    c2: '0000000000000',
    c3: '0001',
    c4: '                                                                                                                                               '
};
const controlLote = {
    c1: '08',
    c2: '000000000',
    c3: '000000000000000000',
    c4: '0001',
    c5: '                                                                                                                                 '
 };
 const controlArchivo = {
    c1: '09',
    c2: '000000000',
    c3: '000000000000000000',
    c4: '                                                                                                                       '
 };

 const detalleArchivo = {
     c1: '06',
     c2: '000000000000000000000000000000000000000000000000',
     c3: '00000000000000',
     c4: '00',
     c5: '01',
     c6: '000000',
     c7: '000000',
     c8: '000',
     c9: '0000',
     c10: '0000002',
     c11: '                                                                 '
 };

 const objAsobancaria = {
    encabezadoArchivo,
    encabezadoLote,
    detalleArchivo,
    controlLote,
    controlArchivo
 };

 export { objAsobancaria };