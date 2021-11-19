

## Ejemplo
```
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons
} from 'mrb-product-card'
```

```
<ProductCard
  product={product}
  initialValues={{
    count: 4,
    // maxCount: 10
  }}
>
  {
    ({ reset, isMaxCountReached, maxCount, increaseBy, count }) => (
      <>
        <ProductImage />
        <ProductTitle />
        <ProductButtons />
      </>
    )
  }
</ProductCard>

```