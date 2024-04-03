/* eslint-disable @typescript-eslint/no-explicit-any */
const reverse = (list: any[], reversilble = true) => (reversilble
  ? Array.prototype.slice.call(list, 0).reverse()
  : list
);

export default reverse;
