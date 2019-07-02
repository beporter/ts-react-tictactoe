import { shallow } from 'enzyme';
import React from 'react';
import { Board } from '../src/Board';

describe('<Board />', () => {
  test('has nine squares', () => {
    const squares = [ // Contents don't matter cause `shallow()`.
      'X', '', '',
      '', '', '',
      '', '', ''
    ];
    const wrapper = shallow(<Board squares={squares} />);

    expect(wrapper.find('Square')).toHaveLength(9);
  });
});
