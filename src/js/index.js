import './lib/jquery';
import 'bootstrap-sass';
import hello from './hello';

async function main() {
  console.log(await hello());
}

main();
