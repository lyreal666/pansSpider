const mocha = require('mocha');
const assert = require('assert');
const requests = require('../utils/download');
const {parseForm} = require('../utils/formKiller');

describe('#formKiller', () => {
    describe('#parseForm', () => {
        it('async parseForm(singleForm) ', async () => {
            let html = await requests.getText('http://jwc.jxnu.edu.cn/Default_Login.aspx?preurl=');
            const result = parseForm(html);
            assert.strictEqual(result.login, '登录')
        });

        it('multiForm', function () {
            const html = `<form>
    <input type="text" name="firstname1"><br>
    <input type="text" name="lastname1">
</form>
<form>
    <input type="text" name="firstname2" value="杨"><br>
    <input type="text" name="lastname2">
</form>`;
            let forms = parseForm(html);
            assert.equal(forms.length, 2);
            assert.strictEqual(forms[1].firstname2, '杨');

        });
    })
});