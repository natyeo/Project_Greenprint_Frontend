import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Welcome from './welcome';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Welcome />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Welcome component', () => {
  it('shows the project name', () => {
    const wrapper = shallow(<Welcome />);
    const text = wrapper.find('h1').text();
    expect(text).toEqual('GreenPrint');
  });

  it('shows "hello there" when not logged in', () => {
    const wrapper = shallow(<Welcome name="there"/>);
    const text = wrapper.find('.hello').text();
    expect(text).toEqual('Hello there!');
  });

  it('shows hello Andy when logged in', () => {
    const wrapper = shallow(<Welcome name="Andy"/>);
    const text = wrapper.find('.hello').text();
    expect(text).toEqual('Hello Andy!');
  });
});