import { fromPairs, reverse, trim } from './utils';

export default function zIndexify(labels: (string | number)[], {
  minIndex = 100,
  inverse = false,
  step = 1,
} = {}): Obj {
  return fromPairs(
    reverse(labels, inverse).map((label, index) => [trim(label), `${minIndex + (index * step)}`]),
  );
}
