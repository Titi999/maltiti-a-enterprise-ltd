import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Test App.js', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('Renders App without crashing', () => {
    // eslint-disable-next-line jest/valid-expect
    expect(wrapper.exists());
  });

  it('App component contains Header component', () => {
    expect(wrapper.find("Header")).toHaveLength(1);
  });

  it('App component contains Slider component', () => {
    expect(wrapper.find("Slider")).toHaveLength(1);
  });

  it('App component contains Category component', () => {
    expect(wrapper.find("Category")).toHaveLength(1);
  });

  it('App component contains About component', () => {
    expect(wrapper.find("About")).toHaveLength(1);
  });

  it('App component contains Shop component', () => {
    expect(wrapper.find("Shop")).toHaveLength(1);
  });

  it('App component contains Banner component', () => {
    expect(wrapper.find("Banner")).toHaveLength(1);
  });

  it('App component contains Gallery component', () => {
    expect(wrapper.find("Gallery")).toHaveLength(1);
  });

  it('App component contains Message component', () => {
    expect(wrapper.find("Message")).toHaveLength(1);
  });

  it('App component contains Blog component', () => {
    expect(wrapper.find("Blog")).toHaveLength(1);
  });

  it('App component contains Testimony component', () => {
    expect(wrapper.find("Testimony")).toHaveLength(1);
  });

  it('App component contains Staff component', () => {
    expect(wrapper.find("Staff")).toHaveLength(1);
  });

  // it('App component contains Partners component', () => {
  //   expect(wrapper.find("Partners")).toHaveLength(1);
  // });

  it('App component contains Services component', () => {
    expect(wrapper.find("Services")).toHaveLength(1);
  });

  it('App component contains Footer component', () => {
    expect(wrapper.find("Footer")).toHaveLength(1);
  });
});
