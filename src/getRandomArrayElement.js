export default getRandomArrayElement
/**
 * @param {Array} arr - the array to get random element from
 * @return {Any} - random array element
 */
function getRandomArrayElement(arr) {
	if (!Array.isArray(arr)) {
		throw TypeError('Expected an array')
	}

	return arr[Math.floor(Math.random() * arr.length)]
}
