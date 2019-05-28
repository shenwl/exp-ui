import { classNames } from "../helpers/classes";

describe('测试classNames', () => {
  it('接收1个className', () => {
    expect(classNames('a')).toBe('a');
  });
  it('接收多个className，并且过滤Boolean为false的值', () => {
    expect(classNames('a', undefined, 'b', null, 'c', 'd', false)).toEqual('a b c d');
  });
});

