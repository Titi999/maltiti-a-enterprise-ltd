import React from 'react';
import { shallow } from 'enzyme';
import Message from './Message';


describe('Testing <Message /> Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Message/>);
  });

  it("Renders without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("Render a section tag", () => {
    expect(wrapper.find('section')).toBeDefined();
  });

});
