import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components'
import { product1 } from '../data/products'

describe('ProductTitle', () => {
  test('renders custom title', () => {
    const wrapper = renderer.create(<ProductTitle title="Custom product" />)
    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  test('should render component with product name', () => {
    const wrapper = renderer.create(<ProductCard product={product1}>
      {
        () => (
          <ProductTitle />
        )
      }
    </ProductCard>)
    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})
