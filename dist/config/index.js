"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Config {
    constructor() {
        this.init();
    }
    init() {
        if (!this.config) {
            return this.getConfig();
        }
    }
    getConfig() {
        this.confType = (process.env.NPCONFIG) ? `${process.env.NPCONFIG}.json` : 'default.json';
        this.config = require('../../config/' + this.confType);
        console.log("loading config....", this.confType);
        if (!process.env.NODE_ENV) {
            process.env.NODE_ENV = 'development';
        }
        return this.config;
    }
}
const config = new Config();
exports.default = config;
//# sourceMappingURL=index.js.map