import { mount, shallow } from 'enzyme';
import React from 'react';
import { Board } from '../src/Board';

describe('<Board />', () => {
  test('has nine squares', () => {
    const squares = [ // Contents don't matter cause `shallow()`.
      'X', '', '',
      '', '', '',
      '', '', ''
    ];
    const wrapper = shallow(<Board squares={squares} clickHandler={() => undefined} />);

    expect(wrapper.find('Square')).toHaveLength(9);
  });

  test('injects click handler into <Square>s', () => {
    const spy = jest.fn((args) => args);
    const squares = [
      'X', '', '',
      '', '', '',
      '', '', ''
    ];
    const wrapper = mount(<Board squares={squares} clickHandler={spy} />);
    wrapper.find('button').first().simulate('click');

    const handler = wrapper.find('Square').first().prop('clickHandler');
    expect(handler).toBeDefined();
    expect(spy).toHaveBeenCalled();
  });
});
