import React from 'react'
import renderer from 'react-test-renderer'

import App from './App'

describe('<App />', () => {
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
