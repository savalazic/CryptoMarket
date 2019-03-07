import { isEmailValid } from '../validation';

describe('isEmailValid', () => {
  it('should return false if email is not valid', () => {
    const email = 'savalazicgmail.com';
    expect(isEmailValid(email)).toBe(false);
  });
  it('should return false if email is valid', () => {
    const email = 'savalazic@gmail.com';
    expect(isEmailValid(email)).toBe(true);
  });
});
