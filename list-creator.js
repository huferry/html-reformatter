module.exports = listCreator


function listCreator(text) {
    const { head, body, tail, lines } = getParts(text)

    if (head === '-' && tail === '-') {
        const list = createList(body)
        return `<ul>\n${list}\n</ul>`
    }

    if (head === '--' && tail === '--') {
        const list = createList(body)
        return `<ol>\n${list}\n</ol>`
    }

    const { before, listBody, after } = findList(lines)
    if (listBody) {
        const result = before
            .concat(listCreator(listBody))
            .concat(after)
            .reduce((all, line) => `${all}\n${line}`, '')
            .trim()

        return listCreator(result)
    }

    return [head]
        .concat(body)
        .concat([tail])
        .filter(line => line !== undefined)
        .reduce((all, line) => `${all}\n${line}`, '')
        .trim()
}

function getParts(text) {

    if (!text) return { head: '' }

    const lines = Array.isArray(text)
        ? text.map(l => l.toString()) 
        : text.toString().split('\n')

    const [head, ...tempBody] = lines.map(line => line.trim())
    const body = tempBody
        .slice(0, tempBody.length -1)
        .filter(line => line.length > 0)

    const tail = tempBody[tempBody.length-1]

    return { head, body, tail, lines }
}

function findList(lines, marking = '-') {
    if (!lines || lines.length === 0) return {}

    const before = []
    const listBody = null
    const after = []

    const firstIndex = lines.indexOf(marking)
    const secondIndex = lines.indexOf(marking, firstIndex + 1)

    if (secondIndex > -1) {
        return { 
            before: lines.slice(0, firstIndex),
            listBody: lines.slice(firstIndex, secondIndex + 1), 
            after:  lines.slice(secondIndex + 1)}

    }

    if (marking === '-') return findList(lines, '--')

    return { before, listBody, after }
}

function createList(lines) {

    let isOpen = false

    const convertToListItem = (line, nextLine) => {
        const dashMatch = line.match(/^-<p>(.+)<\/p>$/)

        if (dashMatch) {            
            isOpen = nextLine !== undefined && nextLine.match(/^-<p>(.+)<\/p>$/) === null
            return isOpen ? `<li>${dashMatch[1]}` : `<li>${dashMatch[1]}</li>`
        }

        const canClose = isOpen 
            && (nextLine === undefined || nextLine.match(/^-<p>(.+)<\/p>$/) !== null)

        if (canClose) {
            isOpen = false
        }

        return canClose ? `${line}\n</li>` : line
    }

    return lines
        .map((line, index) => convertToListItem(line, lines[index + 1]))
        .reduce((total, line) => `${total}\n${line}`)
}