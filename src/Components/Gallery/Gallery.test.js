import React from 'react';
import { shallow } from 'enzyme'
import Gallery from './Gallery';


describe('Testing <Gallery /> Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Gallery />);
  });

  it("Renders without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("Render a section tag", () => {
    expect(wrapper.find('section')).toBeDefined();
  });

});
