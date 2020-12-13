const isNull = (value) => {
    return typeof value === 'undefined' || value === '' || value === null;
};

const validRange = (value) => {
    return !(parseInt(value) > 0 && parseInt(value) < 32);
};

const errorRange = (el) => {
    el.value = '';
    el.style.border = '1px solid red';
    return;  
};

const validFromTo = (el, type) => {
    const value = el.value;
    const value2 = document.getElementById(`${type}-date-filter`).value;
    el.style.border = '1px solid #CCC';
    if (isNull(value)) return;
    if (validRange(value)) return errorRange(el);
    if (isNull(value2)) return;
    if (type.includes('to') && parseInt(value) < parseInt(value2)) return;
    if (!type.includes('to') & parseInt(value) > parseInt(value2)) return;
    errorRange(el);
};

export { validFromTo };