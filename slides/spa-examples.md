
<!-- .slide: class="dark" data-background="#1e1e1e" -->

# SPA Frameworks


## React

```javascript
class MyModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title || '',
      timeLimit: props.timeList || 0;
    }
  }
});
```

```javascript
import { render } from 'react-testing-library'
...
describe('Loading App Data', function() {
  it('sets basic data', function() {
      const { getByText } = render(<MyModule title="Build Right" timeLimit={60}/>);

    expect(getByLabelText('Title')).to.equal('Build Right');
    expect(getByLabelText('Time Limit')).to.equal('60');
});
```
