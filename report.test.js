const { sortPages } = require('./report.js');
const { test, expect } = require('@jest/globals');

test('sortPages: 2 pages', () => {
  const input = { 'https://wagslane.dev': 3, 'https://wagslane.dev/path': 1 };
  const actual = sortPages(input);
  const expected = [
    ['https://wagslane.dev', 3],
    ['https://wagslane.dev/path', 1],
  ];
  expect(actual).toEqual(expected);
});

test('sortPages: 5 pages', () => {
  const input = {
    'https://wagslane.dev': 3,
    'https://wagslane.dev/path3': 20,
    'https://wagslane.dev/path9': 17,
    'https://wagslane.dev/path6': 100,
    'https://wagslane.dev/path1': 0,
  };
  const actual = sortPages(input);
  const expected = [
    ['https://wagslane.dev/path6', 100],
    ['https://wagslane.dev/path3', 20],
    ['https://wagslane.dev/path9', 17],
    ['https://wagslane.dev', 3],
    ['https://wagslane.dev/path1', 0],
  ];
  expect(actual).toEqual(expected);
});
