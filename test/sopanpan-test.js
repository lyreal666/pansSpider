const mocha = require('mocha');
const pansoso = require('../middlewares/pansoso');

describe('#sopanpan', () => {
    it("pansoso('戒律的复活)'", async function () {
        await pansoso('戒律的复活');
    });
});