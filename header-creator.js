module.exports = headerCreator

function headerCreator(text) {
    return getLines(text)
        .map(process)
        .reduce((all, line) => `${all}\n${line}`, '')
        .trim()
}

function getLines(text) {
    if (!text) return []

    if (Array.isArray(text)) {
        return text.map(t => t.toString().trim())
    }

    return text.split('\n').map(t => t.trim())
}

function process(line) {
    if (!line) return ''

    const headerMatch = line.trim().match(/(h\d)(\.(.+))?<p>(.+?)<\/p>/)

    if (!headerMatch) return line

    const tag = headerMatch[1]
    const numbering = headerMatch[3] ? headerMatch[3] + '. ' : ''
    const body = headerMatch[4]
    return `<${tag}>${numbering}${body}</${tag}>`
}