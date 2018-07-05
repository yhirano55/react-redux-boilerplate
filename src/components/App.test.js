import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, mount, render } from 'enzyme'

import App from './App'

describe('<App />', () => {
  context('with enzyme', () => {
    it('should exists expected elements', () => {
      const wrapper = shallow(<App />)
      expect(wrapper.text()).toBe('Hello, World')
    })
  })

  context('with normal scenario', () => {
    const component = renderer.create(
      <App />
    )

    it('should display App', () => {
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
