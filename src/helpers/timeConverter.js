
const timeConverter = (tiempo) => {
    const pad = v => v.padStart(2, `0`);
    const initialDate = tiempo.split(/[-/]/).map(pad).join("/");
    const toFragments = dateString => initialDate.split(/[-/]/).map(pad);
    const [date, month, year] = toFragments(initialDate);
    const nuevo = [month, date, year].join('/');

    return nuevo
}