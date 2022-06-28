import React from 'react';
import { shallow } from 'enzyme';
import Blog from './Blog';


describe('Testing <Blog /> Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Blog />);
  });

  it("Renders without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("Render a section tag", () => {
    expect(wrapper.find('section')).toBeDefined();
  });

});
