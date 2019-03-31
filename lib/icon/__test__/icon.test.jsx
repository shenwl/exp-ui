import React from 'react';
import * as renderer from 'react-test-renderer';
import Icon from '../index';

describe('测试Icon组件', () => {
  it('UI测试', () => {
    const json = renderer.create(<Icon name="wechat"/>).toJSON();
    expect(json).toMatchSnapshot();
  });
});

