function prevDate (date) {
    let cdate = new Date(date);
    let pdate = new Date(cdate.setDate(cdate.getDate()-1));
    return pdate.toLocaleDateString();
}

function prevWeek(date) {
    let cdate = new Date(date);
    let pdate = new Date(cdate.setDate(cdate.getDate()-7));
    return pdate.toLocaleDateString();
}


console.log(prevWeek("2022-10-18"))