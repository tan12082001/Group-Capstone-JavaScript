import countDishes from './dishCounts.js';

describe('Count items', () => {
  beforeEach(() => {
    // set up Mock DOM
    document.body.innerHTML = '<div class="content">'
          + '<div';
  });
  afterEach(() => {
    document.body.innerHTML = '';
  });
  test('3 items', () => {
    const ul = document.querySelector('.content');
    ul.innerHTML = '<div class="container"></div>'
            + '<div class="container"></div>'
            + '<div class="container"></div>';
    const count = countDishes();
    expect(count).toBe(3);
  });
  test('1 items', () => {
    const ul = document.querySelector('.content');
    ul.innerHTML = '<div class="container"></div>';
    const count = countDishes();
    expect(count).toBe(1);
  });
  test('No items', () => {
    const ul = document.querySelector('.content');
    ul.innerHTML = '';
    const count = countDishes();
    expect(count).toBe(0);
  });
});
