import { http } from './plugins/fetch';
import { exportFile } from './plugins/build-file';
import { verifyDate, getFilter, setYears } from './utils/dateUtils';
import { 
    closeDownloadGif,
    openPopupDownload,
    openErrorPopup,
    openLoadingGif,
    errorRequest
    } from './utils/interfacePopups';
import { initEvents } from './utils/events';

const exportFileModule = () => {

    const getData = async (filter, type) => {
        if (!verifyDate(filter.init)) return;
        if (!verifyDate(filter.end)) return;
        const params = `${filter.init.replaceAll('/', '-')}/${filter.end.replaceAll('/', '-')}`;
        const url = (type === 'old') ? `history/${params}` : `get/${params}`;
        const data = await http(url, 'get', null, null, 'asobancaria');
        return data;
    };
 
    const generateDownload = (details) => {
        const data = { details };
        exportFile(data);
        setTimeout( () => {
            openPopupDownload();
        }, 500);
    };

    const generateFile = async (type) => {
        openLoadingGif();
        const init = getFilter(`${type}from`);
        const end = getFilter(`${type}to`);
        if (init && end) {
            const filter = { init, end };
            const details = await getData(filter, type);
            if (details) {
                generateDownload(details);
            } else {
                errorRequest();
            }
        } else {
            setTimeout( () => {
                closeDownloadGif();
                openErrorPopup();
            }, 500);
        }
    };

    const generateFileEvent = () => {
        generateFile('');
    };
    
    const generateFileOldEvent = () => {
        generateFile('old');
    };

    const init = () => {
        initEvents(generateFileEvent, generateFileOldEvent);
        setYears();
    };

    init();
};

export { exportFileModule };