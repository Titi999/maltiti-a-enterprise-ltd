import React from 'react';
import { shallow } from 'enzyme';
import Services from './Services';


describe('Testing <Services /> Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Services />);
  });

  it("Renders without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("Render a section tag", () => {
    expect(wrapper.find('section')).toBeDefined();
  });

});
