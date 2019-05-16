const sleep = (func, delay) =>
  new Promise(resolve => setTimeout(() => resolve(func), delay));

const hello = async () => {
  const hello = { hello: 'hello' };
  const world = { world: 'world' };
  const helloWorld = { ...hello, ...world };
  const result = await sleep(Object.values(helloWorld).join(' '), 3000);
  return result;
};

export default hello;
