"use strict";

const superagent = require('superagent');

const debug = console.debug;

const CONFIGS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:59.0) Gecko/20100101 Firefox/59.0',
};

let requests = {};

requests.get = (url, configs=CONFIGS) => {
    return superagent.get(url).set(configs)
};

requests.post = (url, configs=CONFIGS) => {
    return superagent.post(url).set(configs)
};

module.exports = requests;