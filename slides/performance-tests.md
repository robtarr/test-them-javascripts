
<!-- .slide: class="dark" data-background="#1e1e1e" -->

# Performance Testing


## [grunt-perfbudget](https://github.com/tkadlec/grunt-perfbudget)

```
module.exports = function(grunt) {
  grunt.config("perfbudget", {
	  default: {
	    options: {
	      url: 'http://frontendtesting.buildright.io',
	      key: 'API_KEY here'
      }
    }
  });

  grunt.loadNpmTasks("grunt-perfbudget");
};
```
### Email www@webpagetest.org to get an API key


## Failing Performace Tests
![Grunt Perf Fail](/images/grunt-perf-fail.png) <!-- .element: class="screenshot" -->


```
module.exports = function(grunt) {
  grunt.config("perfbudget", {
	  default: {
	    options: {
	      url: 'http://frontendtesting.buildright.io',
	      key: 'API_KEY here',
	      budget: {
	        speedIndex: 1900
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-perfbudget");
};
```


## Passing Performace Tests
![Grunt Perf Pass](/images/grunt-perf-pass.png) <!-- .element: class="screenshot" -->
