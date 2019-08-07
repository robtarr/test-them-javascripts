
<!-- .slide: class="dark" data-background="#1e1e1e" -->

![Mocha JS](/images/mocha-logo.png) <!-- .element style="width: 45%;" -->
## Domain Specific Language (DSL)
Note: Ryan


### `describe`

```javascript
describe('Shopping Cart', () => {
  // ...
});
```


### `it`

```javascript
it('provides an item count', () => {
  // ...
});
```


### Pending Tests

```javascript
xit('raises cartChanged when adding items', () => {
  // ...
});
```
```javascript
it('raises cartChanged when adding items');
```


<!-- .slide: class="dark" data-background="#1e1e1e" -->

![Chai JS](/images/chai-logo.png) <!-- .element style="width: 40%" -->
## Chai


### `expect`

```javascript
expect(cart.itemCount).to.equal(3);
```


### `beforeEach`

```javascript
beforeEach(() => {
  // run setup code here that crosses multiple tests
});
```


### `afterEach`

```javascript
afterEach(() => {
  // run cleanup code here that crosses multiple tests
});
```


### All Together Now

```javascript
describe('ShoppingCart', () => {
  var shoppingCart;

  beforeEach(() => {
    shoppingCart = new ShoppingCart();
  });

  it('provides an item count', () => {
    shoppingCart.addItem('Build Right: Collaboration');
    shoppingCart.addItem('Build Right: Maker Series');

    expect(shoppingCart.itemCount).to.equal(2);
  });

  xit('raises cartChanged when adding items', () => {
    // publish events for great good
  });
});
```


![Mocha/Chai DSL - All Together](/images/mocha-all-together-now.png) <!-- .element: class="screenshot" -->


### Nested `describe`

```javascript
describe('ShoppingCart', () => {
  let shoppingCart;
  beforeEach(() => { shoppingCart = new ShoppingCart(); });

  describe('#constructor', () => {
    it('has no items', () => {
      expect(shoppingCart.itemCount).to.equal(0);
    });
  });

  describe('#addItem', () => {
    it('provides an item count', () => {
      shoppingCart.addItem('Build Right: Collaboration');
      shoppingCart.addItem('Build Right: Maker Series');
      expect(shoppingCart.itemCount).to.equal(2);
    });

    xit('raises cartChanged when adding items', () => {});
  });
});
```


![Nested Describes](/images/mocha-nested-describes.png) <!-- .element: class="screenshot" -->
