import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme'


describe('Testing <Header /> Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it("Renders without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("Render a section tag", () => {
    expect(wrapper.find('section')).toBeDefined();
  });

});
