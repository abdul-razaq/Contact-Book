import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AddContact from '../../components/AddContact';
import Header from '../../components/UI/Header';
import Search from '../UI/Search';
import Button from '../UI/Button';

configure({adapter: new Adapter()});

describe('<AddContact />', () => {

  // beforeEach() function runs before each tests and we can do some general setup in it, it takes a function that gets executed before each tests. afterEach() allows us to do some cleanup after each test
  let wrapper;

  // Render this AddContact component and store it before they get passed to each tests
  beforeEach(() => {
    wrapper = shallow(<AddContact />);
  });

  it('should render <Header /> and <Form /> component', () => {
    expect(wrapper.find(Header, 'div')).toHaveLength(1);
  });

  it('should not render Search component', () => {
    expect(wrapper.find(Search));
  });

  it('should have a Button component', () => {
    expect(wrapper.find(Button));
  
  });
});
