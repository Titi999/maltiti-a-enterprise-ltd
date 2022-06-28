import React from 'react';
import Slider from './Slider';
import { shallow } from 'enzyme'


describe('Testing <Slider /> Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Slider />);
  });

  it("Renders without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("Render a section tag", () => {
    expect(wrapper.find('section')).toBeDefined();
  });

});
