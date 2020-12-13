const closeDownloadGif = () => {
    const el = document.getElementById('loading-container');
    el.style.display = 'none';
};
const openPopupDownload = () => {
    closeDownloadGif();
    const elDownload = document.getElementById('export-report');
    elDownload.style.display = 'inline-block';
};

const openErrorPopup = () => {
    const elError = document.getElementById('export-report-error');
    elError.style.display = 'inline-block';
};

const openLoadingGif = () => {
    const el = document.getElementById('loading-container');
    el.style.display = 'inline-block';
};

const errorRequest = () => {
    alert('No se encontraron resultados para su consulta. intentelo nuevamente');
    closeDownloadGif();
};
const closeModal = () => {
    const elDownload = document.getElementById('export-report');
    elDownload.style.display = 'none';
};

const closeModalError = () => {
    const elDownload = document.getElementById('export-report-error');
    elDownload.style.display = 'none';
};

export { 
    closeDownloadGif,
    openPopupDownload,
    openErrorPopup,
    openLoadingGif,
    errorRequest,
    closeModal,
    closeModalError
    };