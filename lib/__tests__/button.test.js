import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../button';

describe('测试组件 Button', () => {
  it('button是个div', () => {
    const json = renderer.create(<Button />).toJSON();
    expect(json).toMatchSnapshot();
  })
})