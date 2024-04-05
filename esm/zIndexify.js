import { fromPairs, reverse, trim } from './utils';
export default function zIndexify(labels, { minIndex = 100, inverse = false, step = 1, } = {}) {
    return fromPairs(reverse(labels, inverse).map((label, index) => [trim(label), `${minIndex + (index * step)}`]));
}
//# sourceMappingURL=zIndexify.js.map