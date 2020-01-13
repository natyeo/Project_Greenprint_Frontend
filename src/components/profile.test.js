import React from 'react';
import { shallow } from 'enzyme';
import Profile from './profile';

describe('Profile', () => {
  it('should render heading', () => {
    const wrapper = shallow(<Profile />);
    const text = wrapper.find('h1').text();
    expect(text).toEqual('My Carbon Dashboard');
  })
})
