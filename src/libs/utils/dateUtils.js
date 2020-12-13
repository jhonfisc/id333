const fecha = new Date();
const month31 = [31,29,31,30,31,30,31,31,30,31,30,31];

const localTime = () => {
    return new Date(Date.now()).toLocaleDateString(
        [],
        {
            hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit'
        }
    );
};

const validDay = (day, month) => {
    return month31[parseInt(month-1)] >= parseInt(day) && parseInt(day) > 0;
};

const getDay = (month) => {
    return month31[parseInt(month-1)].toString();
};

const verifyDate = (dateValid) => {
    const vregexNaix = /^(0[1-9]|[1-2]\d|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/;
    return vregexNaix.test(dateValid);
};

const getDayFromType = (type, month) => {
    let day = document.getElementById(`${type}-date-filter`).value;
    if (typeof day === 'undefined' || day === null 
        || day === '' || day === '0' || day === '00' ) { 
            day = (typeof type !== 'undefined' && type.includes('from')) ? '01' : getDay(month);
    }
    if (day.length === 1) day = `0${day}`;
    if (validDay(day, month)) return day;
    return false;
};

const getMonth = (type) => {
    let month = '';
    if (type.includes('old')) {
        const el = document.getElementById('month-old');
        month = el.value;
    } else {
        month = fecha.getMonth();
    }
    if (month.length === 1) month = `0${month}`;
    return month;
};

const getYear = (type) => {
    if (type.includes('old')) {
        const el = document.getElementById('year-old');
        return el.value.toString();
    } else {
        return fecha.getFullYear();
    }
};

const getFilter = (type) => {    
    let month = getMonth(type);
    const year = getYear(type);
    const day = getDayFromType(type, month);
    if(!day) return false;
    return `${day}/${month}/${year}`;
};

const setYears = () => {
    const el = document.getElementById('year-old');
    const startYear = 2019;
    const year = fecha.getFullYear();
    const dif = year - startYear;
    for (let i = 0; i <= dif; i += 1) {
        const elOption = document.createElement('option');
        elOption.value = year - i;
        elOption.innerHTML = year - i;
        el.appendChild(elOption);
    }
};

export { localTime, verifyDate, getFilter, setYears };