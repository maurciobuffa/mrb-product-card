import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductImage } from '../../src/components'
import { product2 } from '../data/products'

describe('ProductImage', () => {
  test('renders custom Image component', () => {
    const wrapper = renderer.create(<ProductImage img="https://hi.jpg" className="custom-class" />)
    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  test('should render component with product image', () => {
    const wrapper = renderer.create(<ProductCard product={product2}>
      {
        () => (
          <ProductImage />
        )
      }
    </ProductCard>)
    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})
