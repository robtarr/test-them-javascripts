# Turn Away!
![Don't do it](/images/car-vs-tsunami-flood.gif) <!-- .element: style="width: 80%" -->
Note: Ryan


## Don't test jQuery
```
myModule.ajaxSuccess = (data) ->
  # awesome code here

myModule.thing = ->
  $.ajax
    url: 'www.example.com',
    success: myModule.ajaxSuccess
```

```
describe "AJAX Callbacks", ->
  it "make an AJAX request", ->
    myModule.thing()
    expect(myModule.ajaxSuccess).toHaveBeenCalled()
```
