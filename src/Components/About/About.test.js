import React from 'react';
import { shallow } from 'enzyme'
import About from './About';


describe('Testing <About /> Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<About />);
  });

  it("Renders without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("Render a section tag", () => {
    expect(wrapper.find('section')).toBeDefined();
  });

});
