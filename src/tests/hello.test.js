import hello from '../index.js';

window.describe('hello', () => {
    it('should say hello to the world', () => {
        expect(hello()).to.equal('Hello World!');
    });

    it('should say hello to a name', () => {
        const name = 'John';
        expect(hello(name)).to.equal(`Hello ${name}!`);
    });
});
