"use strict";

async function test() {
    console.log('进入test')
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            console.log('test...');
            resolve();
        }, 1000);
    }))
}

(async () => {
    try {
        const rs = (async () => {
            console.log('执行钱')
            await test();
            console.log('test执行完毕')
        })();
        //await Promise.all(tasks);
    } catch (e) {
        console.error(e)
    }
    await
    console.log('done');
})().then();

