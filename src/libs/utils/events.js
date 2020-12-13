import { validFromTo } from '../utils/dataValidation';
import { localTime } from './dateUtils';
import { 
    closeModal,
    closeModalError
    } from '../utils/interfacePopups';

const initEvents = (generateFileEvent, generateFileOldEvent) => {
    const setEventQuery = (generateFileEvent, generateFileOldEvent) => {
        const el = document.getElementById('query-from-filters');
        const elOld = document.getElementById('queryold-from-filters');
        el.addEventListener('click', generateFileEvent);
        elOld.addEventListener('click', generateFileOldEvent);
    };
    
    const setEventCloseModal = () => {
        const elClose = document.getElementById('close-download-modal');
        elClose.addEventListener('click', closeModal);
        const elCloseError = document.getElementById('close-error-modal');
        elCloseError.addEventListener('click', closeModalError);
    };

    const setEventDownloadFile = () => {
        const elDownloadContainer = document.getElementById('download-file');
        elDownloadContainer.addEventListener('click', clickBridge);
    };

    const setDownloadDate = () => {
        const el = document.getElementById('download-date');
        el .innerHTML = `Descargado a las: ${localTime()}`
    };

    const clickBridge = () => {
        const el = document.getElementById('download-plain-file');
        el.click();
        setDownloadDate();
    };

    const validNumberFrom = (ev) => {
        validFromTo(ev.srcElement, 'to');
    };

    const validNumberTo = (ev) => {
        validFromTo(ev.srcElement, 'from');
    };

    const validNumberFromOld = (ev) => {
        validFromTo(ev.srcElement, 'oldto');
    };

    const validNumberToOld = (ev) => {
        validFromTo(ev.srcElement, 'oldfrom');
    };

    const setCharset = () => {
        const el = document.getElementById('from-date-filter');
        el.addEventListener('blur', validNumberFrom);
        const elTo = document.getElementById('to-date-filter');
        elTo.addEventListener('blur', validNumberTo);
        const elOld = document.getElementById('oldfrom-date-filter');
        elOld.addEventListener('blur', validNumberFromOld);
        const elToOld = document.getElementById('oldto-date-filter');
        elToOld.addEventListener('blur', validNumberToOld);
    };

    const init = (generateFileEvent, generateFileOldEvent) => {
        setEventQuery(generateFileEvent, generateFileOldEvent);
        setCharset();
        setEventCloseModal();
        setEventDownloadFile();
    };
    init(generateFileEvent, generateFileOldEvent);
};

export { initEvents };