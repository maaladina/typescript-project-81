import { test, expect } from 'vitest';
import Tag from '../src/Tag.ts';

test('br', () => {
  const tag = new Tag('br').toString();
  expect(tag).toEqual('<br>');
});

test('img tag with src', () => {
  const tag = new Tag('img', { src: 'path/to/image' }).toString();
  expect(tag).toEqual('<img src="path/to/image">');
});

test('input with attrs', () => {
  const tag = new Tag('input', { type: 'submit', value: 'Save' }).toString();
  expect(tag).toEqual('<input type="submit" value="Save">');
});

test('label', () => {
  const tag = new Tag('label', { for: 'email' }, 'Email').toString();
  expect(tag).toEqual('<label for="email">Email</label>');
});

test('div', () => {
  const tag = new Tag('div').toString();
  expect(tag).toEqual('<div></div>');
});
