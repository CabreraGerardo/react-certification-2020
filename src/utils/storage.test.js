import { storage } from './storage';

describe('Test storage', () => {
  test('Check set and get', () => {
    const value = 'test';
    storage.set('test', value);
    const local = storage.get('test');
    expect(local).toBe(value);
  });

  test('If the key doesnt exists, return null', () => {
    const local = storage.get('no-exists');
    expect(local).toBe(null);
  });
});
