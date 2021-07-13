function filterByTerm (inputArr, searchTerm) {
    const regex = new RegExp(searchTerm, "i")
    return inputArr.filter(function (arrayElement) {
        return arrayElement.url.match(regex)
    })
}

describe('Filter Function', () => {
    test('it should filter by a serach term (link)', () => {
        const input = [
            { id: 1, url: "https://www.url.com"},
            { id: 2, url: "https://www.url1.com"},
            { id: 3, url: "https://www.link2.com"}
        ]
        const output = [ { id: 3, url: "https://www.link2.com"}]
        expect (filterByTerm(input, 'link')).toEqual(output)

        expect(filterByTerm(input, 'LINK')).toEqual(output)
    })
 
})

// filterByTerm(inputArr, "link")