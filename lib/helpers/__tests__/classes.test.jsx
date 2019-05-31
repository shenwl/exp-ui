import { classNames, scopedClassMaker } from "../classes";

describe('测试classNames', () => {
  it('接收1个className', () => {
    expect(classNames('a')).toBe('a');
  });
  it('接收多个className，并且过滤Boolean为false的值', () => {
    expect(classNames('a', undefined, 'b', null, 'c', 'd', false)).toEqual('a b c d');
  });
});

describe('测试scopedClassMaker', () => {
  it('接收1个prefix', () => {
    expect(scopedClassMaker('a')()).toBe('a');
  });
  it('接收1个className', () => {
    expect(scopedClassMaker('a')('b')).toBe('a_b');
  });
});

