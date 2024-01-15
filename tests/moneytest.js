import {formatcurrency} from '../scripts/utils/money';

if (formatcurrency(2095) === '20.95'){
  console.log('passed');
} else{
  console.log('failed');
}