import React from 'react';
import { shallow } from 'enzyme';
import Staff from './Staff';


describe('Testing <Staff /> Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Staff />);
  });

  it("Renders without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("Render a section tag", () => {
    expect(wrapper.find('section')).toBeDefined();
  });

});
