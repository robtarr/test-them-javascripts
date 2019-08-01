
# Examples
Note: Rob


## Setters and Getters
``` coffeescript
it "can identify colors", ->
  app.setColor("#fff")

  expect(app.getColor()).toBe "white"
```


## Method output
``` coffeescript
it "should convert 1", ->
    expect(numberToLCD(3)).toEqual
    """
      _
      _|
      _|
    """
```


##  Method output
``` coffeescript
  it "should convert 1234567890", ->
    expect(numberToLCD(1234567890)).toEqual
    """
         _  _     _  _  _  _  _  _
       | _| _||_||_ |_   ||_||_|| |
       ||_  _|  | _||_|  ||_| _||_|
    """
```


##  Business Logic
``` coffeescript
  it "should return available shoe sizes for a given style", ->
    shoe = new Shoe('loafer')

    expect(shoe.availableSizes()).toEqual [7, 7.5, 8, 9, 9.5, 10, 10.5, 11]
```


## Spying on functions
``` coffeescript
it "will register and call to 'init' of an object", ->
  test = jasmine.createSpyObj('test', ['init'])
  Initializer.register(test)
  Initializer.run()
  expect(test.init).toHaveBeenCalled()
```


## Spying on function parameters
``` coffeescript
it "will register and call to 'init' of an object", ->
  test = jasmine.createSpy('test')
  test('a', 'b')
  expect(test).toHaveBeenCalledWith('a', 'b')
```


## Checking for exceptions being thrown
``` coffeescript
it "will throw an error if it doesn't find a function", ->
  expect(-> Initializer.register('test')).toThrowError()
```
Note: Be sure to mention that the expectation needs to be wrapped in a function
