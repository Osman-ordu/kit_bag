export const isEmpty = data => {
	for (let key in data) {
		if (data.hasOwnProperty(key)) return false;
	}
	return true;
};

export default isEmpty;