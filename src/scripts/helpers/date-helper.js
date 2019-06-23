export function myDate(stringDate) {

    const d = new Date(stringDate);

    if (isNaN(d)) {
        return null;
    }
    return d.toLocaleString('pl-PL');
}


