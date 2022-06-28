import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';


describe('Testing <Footer /> Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });

  it("Renders without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("Render a section tag", () => {
    expect(wrapper.find('section')).toBeDefined();
  });

});
