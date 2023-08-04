import countComments from './comments-counter.js';

describe('Count comments in html element', () => {
  beforeEach(() => {
    // set up Mock DOM
    document.body.innerHTML = '<ul class="outer">'
        + '<ul';
  });
  afterEach(() => {
    document.body.innerHTML = '';
  });
  test('Case 1: 5 comments', () => {
    const ul = document.querySelector('.outer');
    ul.innerHTML = '<li class="each-comment"></li>'
          + '<li class="each-comment"></li>'
          + '<li class="each-comment"></li>'
          + '<li class="each-comment"></li>'
          + '<li class="each-comment"></li>';
    const count = countComments();
    expect(count).toBe(5);
  });
  test('Case 2: 1 comments', () => {
    const ul = document.querySelector('.outer');
    ul.innerHTML = '<li class="each-comment"></li>';
    const count = countComments();
    expect(count).toBe(1);
  });
  test('Case 3: 0 comments', () => {
    const ul = document.querySelector('.outer');
    ul.innerHTML = '';
    const count = countComments();
    expect(count).toBe(0);
  });
});