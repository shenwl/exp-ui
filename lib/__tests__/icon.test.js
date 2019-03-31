import React from 'react';
import renderer from 'react-test-renderer';
import Icon from '../icon';

describe('测试组件 Icon', () => {
  it('Icon是个div', () => {
    const json = renderer.create(<Icon />).toJSON();
    expect(json).toMatchSnapshot();
  });
});
