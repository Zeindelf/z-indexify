/* eslint-disable @typescript-eslint/no-explicit-any */
const trim = (input: any): string => (typeof input === 'string' ? input.trim() : input);

export default trim;
