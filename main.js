"use strict";

const requests = require('./untiles/download');


let main = async () => {
    let {text: html} = await requests.get('http://www.pansoso.com/zh/%E4%B8%83%E5%A4%A7%E7%BD%AA');
    console.debug(html);
    process.exit(0);
};
main().then();