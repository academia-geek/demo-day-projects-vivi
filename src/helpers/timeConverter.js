
const timeConverter = (tiempo) => {
    const pad = v => v.padStart(2, `0`);
    const initialDate = tiempo
        .split(/[-/]/).map(pad).join("/");
    const toFragments = dateString => initialDate
        .split(/[-/]/).map(pad);
    const dateTo_mmddyyyy = ([date, month, year], divider = "/") =>
        `${month}${divider}${date}${divider}${year}`;
    const [date, month, year] = toFragments(initialDate);
    console.log(`initial (dd/mm/yyyy): ${initialDate}`);
    console.log(`reformatted to mm/dd/yyyy (array join): ${[month, date, year].join('/')}`);
    console.log(`reformatted to mm-dd-yyyy (function): ${dateTo_mmddyyyy(toFragments(initialDate), "-")}`);
}