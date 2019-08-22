import getFilterValue from '../getFilterValue';

it('should return yes on getFilterValue', () => {
  expect(getFilterValue('?search=yes')).toMatchSnapshot();
});
