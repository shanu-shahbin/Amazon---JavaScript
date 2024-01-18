import {formatcurrency} from '../scripts/utils/money';

describe('test-suite: formatCurrency', () => {
  it('converts cents into dollers', () =>{
    expect(formatcurrency(2095)).toEqaul('2095');
  });
});