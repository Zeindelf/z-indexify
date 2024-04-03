/* eslint-disable @typescript-eslint/no-explicit-any */
const trim = (input: any): string => (typeof input === 'string' ? input.replace(/^\s+|\s+$/g, '') : input);

export default trim;
