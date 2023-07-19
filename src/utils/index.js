const dateToSQLDate = (date) => {
	return date.toISOString().slice(0, 10);
};

const SQLDateToDate = (SQLDate) => {
	const [year, month, day] = SQLDate.split("-");
	return `${day}.${month}.${year}`;
};

const addDaysToDate = (date, days) => {
	return new Date(date.setDate(date.getDate() + days));
};

export {
	dateToSQLDate,
	addDaysToDate,
	SQLDateToDate,
};