
<!-- .slide: class="dark" data-background="#1e1e1e" -->

![Chai JS](/images/chai-logo.png) <!-- .element style="width: 45%" -->
## Expectations & Matchers


```javascript
expect(x).to.equal(y);
```
Compares objects or primitives x and y and passes if they are the same object

```javascript
var a = { color: 'red' };

// ✓ will pass
expect(getProperties(a)).to.equal(a);

// ✕ will fail with `expected { color: 'red' } to equal { color: 'red' }.`
expect(getProperties(a)).to.equal({ color: 'red' });
```


```javascript
const a = 3;
const b = 5;
const c = '8';

// ✓ will pass
expect(a+b).to.equal(8);

// ✕ will fail with `expected 8 to equal '8'.`
expect(a+b).to.equal(c);
```


```javascript
expect(x).not.to.equal(y);
```
Compares objects or primitives x and y and passes if they are NOT the same

```javascript
const a = 3;
const b = 5;
const c = '8';

// ✓ will pass
expect(a+b).not.to.equal(c);

// ✕ will fail with `expected 8 to not equal 8.`
expect(a+b).not.to.equal(8);
```


## Chai Matchers Reference

[http://www.chaijs.com/api/bdd/](http://www.chaijs.com/api/bdd/)
