const letters = {
	'a': 'а',
	'b': 'б',
	'c': 'ц',
	'd': 'д',
	'e': 'э',
	'f': 'ф',
	'g': 'г',
	'h': 'х',
	'i': 'и',
	'j': 'й',
	'k': 'к',
	'l': 'л',
	'm': 'м',
	'n': 'н',
	'o': 'о',
	'p': 'п',
	'r': 'р',
	's': 'с',
	't': 'т',
	'u': 'у',
	'v': 'в',
	'z': 'з',
	'sh': 'ш',
	'sh;': 'щ',
	'ch': 'ч',
	'dj': 'ж',
	':': 'ъ',
	';': 'ь',
	'ya': 'я',
	'yu': 'ю',
	'yo': 'ё',
	'ye': 'е',
	'yi': 'ы',
}

const input = document.getElementsByName('string')[0]

function cyrillic(text) {
	let i = 0
	let result = ''

	while (i < text.length) {
		
		let current = text[i]
		let past

		do
		{
			past = current
			current += text[++i]
		}
		while (letters[current] != undefined)

		result += letters[past]
	}

	return result.split('undefined').filter(c => c).join(' ')
}

input.addEventListener('keyup', e => {
	let translation = cyrillic(input.value)
	navigator.clipboard.writeText(translation)
	document.querySelector('span').innerText = translation

});