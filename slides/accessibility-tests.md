
<!-- .slide: class="dark" data-background="#1e1e1e" -->

# Accessibility Testing


## [grunt-accessibility](https://github.com/yargalot/grunt-accessibility)

```javascript
module.exports = function(grunt) {
  grunt.config("accessibility", {
    options: {
      accessibilityLevel: 'WCAG2AA',
    }, {
    test: {
      src: [
        'index.html'
      ]
    }
  });

  grunt.loadNpmTasks("grunt-accessibility");
}
```


## Accessibility Tests Results

### Notices
```
NOTICE WCAG2AA.Principle2.Guideline2_4.2_4_2.H25.2
>> Line 6 col 3
>> Check that the title element describes the document.
>> --------------------
>> <title>Build Right: Frontend Testing</title>
```


### Warnings
```
WARNING WCAG2AA.Principle1.Guideline1_3.1_3_1.H49.B
>> Line 50 col 4201
>> Semantic markup should be used to mark emphasised or special text so that it
>> can be programmatically determined.
>> --------------------
>> <b>Important Fact:</b>
```


### Errors
```
ERROR WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.InputRadio.Name
>> Line 1528 col 5
>> This radio input element does not have a name available to an accessibility
>> API. Valid names are: label element, title attribute.
>> --------------------
>> <input class="radio" type="radio" name="shirt-size">
```
