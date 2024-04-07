/* The uniqArray function, located in the javascript folder within the helperFunction directory, is an exported utility function designed to return an array of unique elements from a given array.*/

const uniqArray = array => {
	return [...new Set(array)];
};

export default uniqArray;

