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

const filtersToQuery = (filters) => {
	let query = "";
	for (const key in filters) {
		if (Array.isArray(filters[key])){
			query += filters[key].map(value => `${key}=${value}&`).join('');
		}
		else{
			query += `${key}=${filters[key]}&`
		}
	}
	return query;
};

export {
	dateToSQLDate,
	addDaysToDate,
	SQLDateToDate,
	filtersToQuery
};