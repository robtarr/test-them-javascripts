
<!-- .slide: class="dark" data-background="#1e1e1e" -->

# SPA Frameworks
Note: Ryan


## Ember

```javascript
App.MyModule = Ember.Object.extend( {
  title: '',
  timeLimit: 00,
  loadStartup: function(data) {
    @set('title', data.Title);
    @set('timeLimit', data.TimeLimit);
  }
});
```

```javascript
describe('Loading App Data', function() {
  it('sets basic data', function() {
    myModule.loadStartup({ Title: 'Build Right', TimeLimit: 60 });

    expect(myModule.get('title')).toEqual('Build Right');
    expect(myModule.get('timeLimit')).toEqual(60);
});
```


## Knockout
```javascript
App.MyModule = {
  title: ko.observable(''),
  timeLimit: ko.observable(00),
  loadStartup: function(data) {
    @title(data.Title);
    @timeLimit(data.TimeLimit);
  }
}
```

```javascript
describe('Loading App Data', function() {
  it('sets basic data', function() {
    myModule.loadStartup({ Title: 'Build Right', TimeLimit: 60 });

    expect(myModule.title()).toEqual('Build Right');
    expect(myModule.timeLimit()).toEqual(60);
  });
});
```
