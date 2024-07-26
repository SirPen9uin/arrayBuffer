import getBuffer from '../getBuffer';
import ArrayBufferConverter from '../converter';

const buffer = getBuffer();

test('Make string', () => {
  const arrayBufferView = ArrayBufferConverter.load(buffer);
  expect(ArrayBufferConverter.toString(arrayBufferView)).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
})