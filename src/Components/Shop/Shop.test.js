import React from 'react';
import { shallow } from 'enzyme'
import Shop from './Shop';


describe('Testing <Shop /> Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Shop />);
  });

  it("Renders without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("Render a section tag", () => {
    expect(wrapper.find('section')).toBeDefined();
  });

});
