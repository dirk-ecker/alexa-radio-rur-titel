const radioRur = require('../src/radiorur');
const expect = require('chai').expect;

describe('radio-rur', () => {

    it('get the actual title', (done) => {
        radioRur.actualTitle((song) => {
            console.log(song);
            expect(title).to.deep.equal('');
            done();
        });
    });

});