import React from 'react';
import { shallow } from 'enzyme';
import Testimony from './Testimony';


describe('Testing <Testimony /> Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Testimony />);
  });

  it("Renders without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("Render a section tag", () => {
    expect(wrapper.find('section')).toBeDefined();
  });

});
