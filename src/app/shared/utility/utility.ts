export function clone(data) {
    return JSON.parse(JSON.stringify(data));
}

export function trimWhitespace(string: string) {
    return string.replace(/\s+/g,' ').trim();
}

export function timeDiffInMinutes(time1: Date, time2: Date) {
    let milliseconds = time2.getTime() - time1.getTime();
    return Math.floor(milliseconds / 60000);
}

export function round(value, precision) {
    let num = value + 'e' + precision;
    return Number(Math.round(Number.parseFloat(num)) + 'e-' + precision);
}

export function arrayCycleRight(array, cycleCount: number) {
    let cycledArray = new Array();

    for (let i = 0; i < array.length; ++i) {
        cycledArray.push(array[(i + (array.length-cycleCount))%array.length]);
    }

    return cycledArray;
}

export function copyToClipboard(val: string) {

    let selectBox = document.createElement('textarea');
    selectBox.style.position = 'fixed';
    selectBox.style.left = '0';
    selectBox.style.top = '0';
    selectBox.style.opacity = '0';
    selectBox.value = val;

    document.body.appendChild(selectBox);
    selectBox.focus();
    selectBox.select();
    document.execCommand('copy');
    document.body.removeChild(selectBox);
}