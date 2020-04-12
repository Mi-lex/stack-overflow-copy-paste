import test from 'ava'
import getRandomArrayElement from '../src/getRandomArrayElement'

test('Throws an error if arg is not an array', (t) => {
	const error = t.throws(() => getRandomArrayElement(null), TypeError)
	t.is(error.message, 'Expected an array')
})

test('Returns one of array elements', (t) => {
	const testArr = Array(5)
		.fill(null)
		.map((_) => Math.random())

	const element = getRandomArrayElement(testArr)
	t.true(testArr.includes(element))
})
