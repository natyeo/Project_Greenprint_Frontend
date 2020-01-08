import React from 'react';
import { render } from '@testing-library/react';
import  JourneyForm  from './journey';
import App from '../App';



test('renders the journey form ', () => {
  const { getByText } = render(<JourneyForm  />);
  const fromElement = getByText(/From/i);
  const toElement = getByText(/To/i);
  expect(fromElement).toBeInTheDocument();
  expect(toElement).toBeInTheDocument();
});



describe('test api gets called  ', () => {

  beforeEach(() => {
    fetch.resetMocks()
  })

  it('calls api url and returns data to me', () => {

    const journeyForm = new JourneyForm();
    console.log(journeyForm)
    fetch.mockResponseOnce(JSON.stringify({ body: {from:'London', to: 'Berlin'}}))

    //assert on the response
    journeyForm.apiCall('api url')
    .then((data)=>data.json())
    .then(res => {
      expect(res.data).toEqual({from:'London', to: 'Berlin'})
    })

    //assert on the times called and arguments given to fetch
    expect(fetch.mock.calls.length).toEqual(1)
    expect(fetch.mock.calls[0][0]).toEqual('https://cors-anywhere.herokuapp.com/https://project-greenprint-backend.herokuapp.com/')
  })
})


  // fetch.mockResponseOnce(JSON.stringify({id:1}));
  // const onResponse = jest.fn()

  //
  // return journeyForm.apiCall('/posts')
  // .then(onResponse)
  // .finally(() => {
  //   expect(onResponse).toHaveBeenCalled()
  //   expect(onResponse.mock.calls[0][0].toEqual({id:1}))
  // })
