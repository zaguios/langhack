const map = {
    'í': 'i',
    'ì': 'i',
    'ǐ': 'i',
    'ī': 'i',

    'ǎ': 'a',
    'à': 'a',
    'á': 'a',
    'ā': 'a',

    'ǒ': 'o',
    'ò': 'o',
    'ō': 'o',
    'ó': 'o',

    'ù': 'u',
    'ū': 'u',
    'ú': 'u',
    'ǔ': 'u',

    'ě': 'e',
    'è': 'e',
    'é': 'e',
    'ē': 'e',
}

[].slice.call(document.getElementsByClassName('thing')).map(element => {
    const text = element.children[3].textContent
    const pinyin = text.split('|')[0].split(';')[0].trim()
    const notone = pinyin.split('').map(char => map[char] === undefined ? char : map[char]).join('')
    return notone
}).join("\", \"")