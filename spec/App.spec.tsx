import { shallow } from "enzyme";
import React from "react";
import { App } from "../src/App";

describe("<App />", () => {
  test("outputs the provided value", () => {
    const wrapper = shallow(<App />);

    // TODO: These stubbed tests only check the currently-static App contents.
    expect(wrapper.text()).toContain('X');
    expect(wrapper.text()).toContain('O');
  });
});
