const { expect, it } = require('@jest/globals')
const listCreator = require('./list-creator')

describe('listCreator', () => {

    it('should not change when no there is no dash', () => {
        // arrange
        const text = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit odio ac tristique viverra. </p>
<p>Nam egestas tincidunt quam et tristique. Cras vel euismod metus.</p>`

        // act
        const actual = listCreator(text)

        // assert
        expect(actual).toBe(text)
    })

    it('should add <ul> when starts and ends with dash', () => {
        // arrange
        const text = `-
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit odio ac tristique viverra. </p>
<p>Nam egestas tincidunt quam et tristique. Cras vel euismod metus.</p>
-`

        const expectation = `<ul>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit odio ac tristique viverra. </p>
<p>Nam egestas tincidunt quam et tristique. Cras vel euismod metus.</p>
</ul>`

        // act
        const actual = listCreator(text)

        // assert
        expect(actual).toBe(expectation)
    })

    it('should add <li> when items start with dash', () => {
        // arrange
        const text = `-
-<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit odio ac tristique viverra.</p>
-<p>Nam egestas tincidunt quam et tristique. Cras vel euismod metus.</p>
-`

        const expectation = `<ul>
<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit odio ac tristique viverra.</li>
<li>Nam egestas tincidunt quam et tristique. Cras vel euismod metus.</li>
</ul>`

        // act
        const actual = listCreator(text)

        // assert
        expect(actual).toBe(expectation)
    })

    it('should add <li> over 2 <p> when second item does not start with dash', () => {
        // arrange
        const text = `-
-<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit odio ac tristique viverra.</p>
<p>Nam egestas tincidunt quam et tristique. Cras vel euismod metus.</p>
-<p>Mauris quis purus dictum, dignissim magna ac, aliquam turpis.</p>
<p>Pellentesque at velit nec nisl venenatis accumsan vel quis arcu.</p>

-`

        const expectation = `<ul>
<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit odio ac tristique viverra.
<p>Nam egestas tincidunt quam et tristique. Cras vel euismod metus.</p>
</li>
<li>Mauris quis purus dictum, dignissim magna ac, aliquam turpis.
<p>Pellentesque at velit nec nisl venenatis accumsan vel quis arcu.</p>
</li>
</ul>`

        // act
        const actual = listCreator(text)

        // assert
        expect(actual).toBe(expectation)
    })

    it('should add <ol> when double dash is used', () => {
        // arrange
        const text = `--
-<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit odio ac tristique viverra.</p>
<p>Nam egestas tincidunt quam et tristique. Cras vel euismod metus.</p>
-<p>Mauris quis purus dictum, dignissim magna ac, aliquam turpis.</p>
<p>Pellentesque at velit nec nisl venenatis accumsan vel quis arcu.</p>
--`

        const expectation = `<ol>
<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit odio ac tristique viverra.
<p>Nam egestas tincidunt quam et tristique. Cras vel euismod metus.</p>
</li>
<li>Mauris quis purus dictum, dignissim magna ac, aliquam turpis.
<p>Pellentesque at velit nec nisl venenatis accumsan vel quis arcu.</p>
</li>
</ol>`

        // act
        const actual = listCreator(text)

        // assert
        expect(actual).toBe(expectation)
    })

    it('should convert when argument is an array', () => {
        // arrange
        const text = ['-',
                '-<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit odio ac tristique viverra.</p>',
                '-<p>Nam egestas tincidunt quam et tristique. Cras vel euismod metus.</p>',
                '-']

        const expectation = `<ul>
<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit odio ac tristique viverra.</li>
<li>Nam egestas tincidunt quam et tristique. Cras vel euismod metus.</li>
</ul>`

        // act
        const actual = listCreator(text)

        // assert
        expect(actual).toBe(expectation)
    })

    it('should return empty string when argument is null', () => {
        // arrange

        // act
        const actual = listCreator(null)

        // assert
        expect(actual).toBe('')
    })

    it('should return empty string when argument is empty array', () => {
        // arrange

        // act
        const actual = listCreator([])

        // assert
        expect(actual).toBe('')
    })

    it('should return same string when argument is two lines', () => {
        // arrange
        const text = 'one\ntwo'

        // act
        const actual = listCreator(text)

        // assert
        expect(actual).toBe(text)
    })

    it('should return same string when argument is five lines', () => {
        // arrange
        const text = 'one\ntwo\nthree\nfour\nfive'

        // act
        const actual = listCreator(text)

        // assert
        expect(actual).toBe(text)
    })

    it('should add <ul> when dash is in the middle of the text', () => {
        // arrange
        const text = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit odio ac tristique viverra.</p>
-
-<p>Nam egestas tincidunt quam et tristique. Cras vel euismod metus.</p>
-<p>Mauris quis purus dictum, dignissim magna ac, aliquam turpis.</p>
-
<p>Pellentesque at velit nec nisl venenatis accumsan vel quis arcu.</p>`

        const expectation = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit odio ac tristique viverra.</p>
<ul>
<li>Nam egestas tincidunt quam et tristique. Cras vel euismod metus.</li>
<li>Mauris quis purus dictum, dignissim magna ac, aliquam turpis.</li>
</ul>
<p>Pellentesque at velit nec nisl venenatis accumsan vel quis arcu.</p>`

        // act
        const actual = listCreator(text)

        // assert
        expect(actual).toBe(expectation)
    })
})