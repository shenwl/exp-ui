import React from 'react';
import * as renderer from 'react-test-renderer';
import Icon from '../index';
import { mount } from 'enzyme';

describe('Icon', () => {
  it('render successfully', () => {
    const json = renderer.create(<Icon name='wechat' />).toJSON();
    expect(json).toMatchSnapshot();
  });

  it('onClick', () => {
    const fn = jest.fn();
    const comp = mount(<Icon name='wechat' onClick={fn} />);
    comp.find('svg').simulate('click');
    expect(fn).toBeCalled();
  });
});
