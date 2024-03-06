// 1. Viet 1 function kiem tra value co phai object khong
function isObject(value) {
    if(typeof value === 'object' && Array.isArray(value) !== true && value !== null) {
        return true;
}