import { objAsobancaria } from '../dataDefinition/asobancaria';
import { dataTranformation, completeData, readData } from '../dataDefinition/dataTransformation';

const exportFile = (data) => {

    const readDetails = (data, file) => {
        for(let i = 0; i < file.detalle.detalleArchivo.length; i += 1) {
            data.push(readData(file.detalle.detalleArchivo[i]));
        }
    };

    const readHead = (data, file) => {
        data.push(readData(file.encabezadoArchivo));
        data.push(readData(file.encabezadoLote));
    };

    const readFooter = (data, file) => {
        data.push(readData(file.controlLote));
        data.push(readData(file.controlArchivo));
    };

    const downloadUrl = (data) => {
        return new Blob(data, 
            {
                type: "octet/stream;charset=utf-8",
                endings: 'native'
            });
    };

    const createBlob = (file) => {
        const data = [];
        readHead(data, file);
        readDetails(data, file);
        readFooter(data, file);
        return downloadUrl(data);
    };

    const createDownloadLink = (dataBlob) => {
        const url = window.URL.createObjectURL(dataBlob);
        const a = document.getElementById('download-plain-file');
        a.href = url;
        a.download = 'asobancaria2001.txt';
        a.innerHTML = 'Descargar Archivo Facturación - Asobancaria 2001';
    };

    const verifyChart = () => {
        const index = ['A', 'B', 'C', 'D', 'E','F', 'G', 'H', 'I', 'J', 'K',
                        'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U',
                        'V', 'X', 'Y', 'Z'];
        let chart = localStorage.getItem('mcVerifyIndex');
        if (typeof chart === 'undefined' || chart === null || chart === '') chart = 0;
        const nextChart = parseInt(chart) + 1;
        localStorage.setItem('mcVerifyIndex', nextChart);
        if (chart < 24) return index[chart];
        return chart - 24;
    };

    const getEncabezadoArchivo = (file) => {
        const encabezadoArchivo = { ...objAsobancaria.encabezadoArchivo };
        encabezadoArchivo.c8 = verifyChart();
        file.encabezadoArchivo = encabezadoArchivo;
    };

    const getEncabezadoLote = (file) => {
        const encabezadoLote = { ...objAsobancaria.encabezadoLote };
        file.encabezadoLote = encabezadoLote;
    };

    const getControlLote = (file) => {
        const controlLote = { ...objAsobancaria.controlLote };
        controlLote.c2 = completeData(file.detalle.totalRegisters.toString(), controlLote.c2.length);
        controlLote.c3 = completeData(file.detalle.total.toString(), controlLote.c3.length);
        file.controlLote = controlLote;
    };

    const getControlArchivo = (file) => {
        const controlArchivo = { ...objAsobancaria.controlArchivo };
        controlArchivo.c2 = completeData(file.detalle.totalRegisters.toString(), controlArchivo.c2.length);
        controlArchivo.c3 = completeData(file.detalle.total.toString(), controlArchivo.c3.length);
        file.controlArchivo = controlArchivo;
    };

    const getDetalle = (file, data) => {
        file.detalle = dataTranformation(data);
    };
    const txtFile = (data) => {
        const file = {};
        getDetalle(file, data);
        getEncabezadoArchivo(file);
        getEncabezadoLote(file);
        getControlLote(file);
        getControlArchivo(file);
        createDownloadLink(createBlob(file));
    };

   const init = (data) => {
       txtFile(data);
    };

    init(data);
};

export { exportFile };