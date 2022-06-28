import React from 'react';
import { shallow } from 'enzyme';
import Banner from './Banner';


describe('Testing <Banner /> Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Banner />);
  });

  it("Renders without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("Render a section tag", () => {
    expect(wrapper.find('section')).toBeDefined();
  });

});
