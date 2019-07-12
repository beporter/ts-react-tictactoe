import * as Enzyme from 'enzyme';
import React from 'react';
import { Board } from '../src/Board';

describe('<Board />', () => {
  const squares = Array(9).fill(' ');
  const onMove = jest.fn();

  test('has nine squares', () => {
    const wrapper = Enzyme.mount(<Board squares={squares} onMove={onMove} />);

    expect(wrapper.find('Square')).toHaveLength(9);
    wrapper.unmount();
  });

  test('injects click handler into <Square>', () => {
    const wrapper = Enzyme.mount(<Board squares={squares} onMove={onMove} />);
    const btn0 = wrapper.find('button').at(0);
    const btn1 = wrapper.find('button').at(1);

    btn0.simulate('click', { event: { preventDefault: () => {} } });

    expect(onMove).toHaveBeenCalledWith(0);

    btn1.simulate('click', { event: { preventDefault: () => {} } });
    expect(onMove).toHaveBeenCalledWith(1);

    wrapper.unmount();
  });
});
