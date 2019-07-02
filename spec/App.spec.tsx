import { shallow } from 'enzyme';
import React from 'react';
import { App } from '../src/App';

describe('<App />', () => {
  test('contains a <Game />', () => {
    const wrapper = shallow(<App />);

    // TODO: These stubbed tests only check the currently-static App contents.
    expect(wrapper.find('Game')).toHaveLength(1);
  });
});
