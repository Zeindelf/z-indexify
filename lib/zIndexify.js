"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
function zIndexify(labels, { minIndex = 100, inverse = false, step = 1, } = {}) {
    return (0, utils_1.fromPairs)((0, utils_1.reverse)(labels, inverse).map((label, index) => [(0, utils_1.trim)(label), `${minIndex + (index * step)}`]));
}
exports.default = zIndexify;
//# sourceMappingURL=zIndexify.js.map