import loginApi from './login';

describe('Test mocked login', () => {
  test('If credentials are correct, resolve mock user', async (done) => {
    const mockedUser = {
      id: '123',
      name: 'Wizeline',
      avatarUrl:
        'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
    };
    const user = await loginApi('wizeline', 'Rocks!');
    expect(user).toEqual(mockedUser);
    done();
  });

  test('If credentials are not correct, reject', async (done) => {
    await loginApi('wrong', 'wrong').catch((error) => {
      expect(error.message).toBe('Username or password invalid');
      done();
    });
  });
});
