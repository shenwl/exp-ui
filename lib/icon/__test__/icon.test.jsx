import React from 'react'
import * as renderer from 'react-test-renderer'
import Icon from '../index'
import { mount } from 'enzyme'

describe('测试Icon组件', () => {
  it('UI测试', () => {
    const json = renderer.create(<Icon name='wechat' />).toJSON()
    expect(json).toMatchSnapshot()
  })

  it('onclick', () => {
    let n = 1
    const fn = () => {
      n = 2
    }
    const comp = mount(<Icon name='wechat' onClick={fn} />)
    comp.find('svg').simulate('click')
    expect(n).toEqual(2)
  })
})
