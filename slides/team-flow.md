
<!-- .slide: class="dark" data-background-color="#1e1e1e" -->

# Team Flow
Note: Ryan


## Let the robots do the work
![Robots](/images/rosie.gif) <!-- .element: style="width: 65%" -->


![Grunt](/images/grunt.png) <!-- .element: style="width: 45%" -->
![Gulp](/images/gulp.png) <!-- .element: style="width: 45%" -->


## Passing Tests

![Passing Tests](/images/passing-tests.png) <!-- .element: class="screenshot" -->


![CircleCI](./images/circleci.png)

```
test:
  override:
    - ./node_modules/.bin/grunt ci
```
## circle.yml


![Code Climate](./images/codeclimate-logo.png) <!-- .element: style="width: 45%" -->
```
languages:
  JavaScript: true
exclude_paths:
  - "src/vendor/*"
  - "specs/*"

```
## .codeclimate.yml


## Code Climate

![Code Climate](./images/codeclimate-feed.png) <!-- .element: class="screenshot" -->


## Code Climate Trends

![Code Climate Trends](./images/codeclimate-graphs.png) <!-- .element: class="screenshot" -->


## Good to Go!

![GitHub with CircleCi](/images/github-circleci.png) <!-- .element: class="screenshot" -->


## Ship it!

![Divshot](./images/divshot.png) <!-- .element style="height: 130px; margin: 1em;" -->
![Capistrano](./images/capistrano-logo.png) <!-- .element style="height: 130px; margin: 1em;" -->
![Mina](./images/mina-logo.png) <!-- .element style="height: 130px; margin: 1em;" -->
