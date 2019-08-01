
<!-- .slide: class="dark" data-background="#1e1e1e" -->

# Testing jQuery
Note: We want to test up to the boundaries of our app, and not test third party services and libraries that we're using.


## Don't test jQuery

```javascript
describe('Item Stock', function() {
  it('marks item out of stock when quantity is zero', function() {
    $item = $('<div data-shoe="1">');
    newStockInfo = { id: 1, quantity: 0 };
    myModule.setStockStatus(newStockInfo);

    expect($item.hasClass('outOfStock')).toBe(true);
  });
});
```

```javascript
myModule.setStockStatus = function(data) {
  $item = $('[data-shoe="#{data.id}"]');

  if(data.quantity === 0) {
    $item.addClass('outOfStock').removeClass('inStock');
  } else {
    $item.addClass('inStock').removeClass('outOfStock');
  }
};
```

Note: Take jQuery, it has a huge test suite. I'm going to assume that when I call a jQuery method, it's going to do what I expect.


```javascript
describe('Item Stock Levels', function() {
  it('returns false if item quantity == 0', function() {
    expect(myModule.inStock({quantity: 0})).toBe(false);
  });

  it('returns true if item quantity > 0', function() {
    expect(myModule.inStock({quantity: 1})).toBe(true);
  });
```

```javascript
myModule.inStock = function(data) {
  return data.quantity > 0;
}
```

Note: If we refactor it a bit, we can test the business logic of our app, apart from the jQuery _class_ calls.


## That being said...

```javascript
describe('Item Stock Levels', function() {
  it('sets a classname of 'outOfStock' if quantity == 0', function() {
    $stockStatus = affix('.shoe-stock-status');

    myModule.showStockStatus({quantity: 0});

    expect($stockStatus.hasClass('outOfStock')).toBe(true);
  });
});
```

```javascript
myModule.showStockStatus = function(data) {
  $stockStatus = $('.shoe-stock-status');

  if(inStock(data)) {
    $stockStatus.addClass('inStock').removeClass('outOfStock');
  } else {
    $stockStatus.addClass('outOfStock').removeClass('inStock');
  }
};
```
