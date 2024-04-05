"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
const reverse = (list, reversilble = true) => (reversilble
    ? Array.prototype.slice.call(list, 0).reverse()
    : list);
exports.default = reverse;
//# sourceMappingURL=reverse.js.map