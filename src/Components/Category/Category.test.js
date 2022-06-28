import React from 'react';
import { shallow } from 'enzyme'
import Category from './Category';


describe('Testing <Header /> Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Category />);
  });

  it("Renders without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("Render a section tag", () => {
    expect(wrapper.find('section')).toBeDefined();
  });

});
