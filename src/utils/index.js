const dateToSQL = (date)=>{
    return date.toISOString().slice(0,10)
}

const addDaysToDate = (date,days)=>{
    return new Date(date.setDate(date.getDate()+days))
}

export {
    dateToSQL,
    addDaysToDate,
}