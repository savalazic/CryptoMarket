import { omit } from '../objectUtils';

describe('omit', () => {
  const data = { x: 3, y: 2, z: 1 };
  it('should remove omitted keys and preserves all others', () => {
    const newData = omit(data, ['x']);
    expect(newData.x).toBe(undefined);
    expect(newData.y).toEqual(2);
    expect(newData.z).toEqual(1);
  });
  it('should create a copy of the original object', () => {
    const newData = omit(data, []);
    newData.x = 10;
    expect(data.x).toEqual(3);
    expect(newData.x).toEqual(10);
  });
  it('should default to an empty object', () => {
    const newData = omit();
    expect(newData).toEqual({});
  });
  it('should default to simple shallow copy', () => {
    const newData = omit(data);
    expect(newData).toEqual(data);
  });
});
