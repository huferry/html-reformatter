const headerCreator = require('./header-creator')

describe('headerCreator', () => {
    
    it('returnn empty string when no argument', () => {
        // arrange

        // act
        const actual = headerCreator()

        // assert
        expect(actual).toBe('')
    })

    it('returns same string when string starts with h2 but no <p>', () => {
            // arrange
            const text = 'h2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit odio ac tristique viverra.'

            // act
            const actual = headerCreator(text)

            // assert
            expect(actual).toBe(text)
    })

    it('should convert to h2 when text starts with h2<p>', () => {
        // arrange
        const text = 'h2<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit odio ac tristique viverra.</p>'
        const expectation = '<h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit odio ac tristique viverra.</h2>'

        // act
        const actual = headerCreator(text)

        // assert
        expect(actual).toBe(expectation)
    })

    it('should add numbering when text starts with h2.A<p>', () => {
        // arrange
        const text = 'h2.A<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit odio ac tristique viverra.</p>'
        const expectation = '<h2>A. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit odio ac tristique viverra.</h2>'

        // act
        const actual = headerCreator(text)

        // assert
        expect(actual).toBe(expectation)
    })

    it('should process multiline when text is multiline', () => {
        // arrange
        const text = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit odio ac tristique viverra. </p>
h3.1<p>Nam egestas tincidunt quam et tristique. Cras vel euismod metus.</p>`
        
        const expectation = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit odio ac tristique viverra. </p>
<h3>1. Nam egestas tincidunt quam et tristique. Cras vel euismod metus.</h3>`

        // act
        const actual = headerCreator(text)

        // assert
        expect(actual).toBe(expectation)
    })

    it('should process multiline when text is array of strings', () => {
        // arrange
        const text = [
            `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit odio ac tristique viverra. </p>`,
            `h3.1<p>Nam egestas tincidunt quam et tristique. Cras vel euismod metus.</p>`]
        
        const expectation = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit odio ac tristique viverra. </p>
<h3>1. Nam egestas tincidunt quam et tristique. Cras vel euismod metus.</h3>`

        // act
        const actual = headerCreator(text)

        // assert
        expect(actual).toBe(expectation)
    })

})