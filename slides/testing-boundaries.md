
<!-- .slide: class="dark" data-background="#1e1e1e" -->

# Testing Boundaries


## $.ajax
```javascript
myModule.startup = function() {
  $.ajax({
    url: 'br-frontend-testing-triangles.herokuapp.com',
    success: function(data) {
      $('#triangleType').text(data.type);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      $('#error').text('Error: ' + errorThrown);
    }
  });
};
```


## Mow Your Own Yard

![Boundaries](../images/yard-boundaries.jpg)


## Assure Ajax Was Called
```javascript
describe("On Startup", function() {

  it("make an AJAX request", function() {
    spyOn($, 'ajax');
    myModule.startup();

    expect($.ajax).toHaveBeenCalled();
  });
});
```


## Test Your Callbacks
```javascript
describe('Loading App Data', function() {
  it('sets basic data', function() {
    spyOn(myModule, 'update');
    myModule.success({ type: 'scalene' });

    expect(myModule.update).toHaveBeenCalledWith('type', 'scalene');
  });
});
```

```javascript
myModule.success = function(data) {
  update('type', data.type);
};

myModule.update = function(id, value) {
  $('#' + id).text(value);
};
```


```javascript
myModule.startup = function() {
  $.ajax({
    url: 'br-frontend-testing-triangles.herokuapp.com',
    success: success,
    failure: failure
  });
};
```
