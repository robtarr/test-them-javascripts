Reveal.addEventListener('slidechanged', function(e) {
  var slide = e.currentSlide,
      imgs = slide.getElementsByTagName('img'),
      i;

  for (i = imgs.length - 1; i >= 0; i--) {
    var src = imgs[i].src;

    if (src.match(/.*\.gif$/)) {
      imgs[i].src = src;
    }
  }

  function addExampleClass(match, className) {
		var re = new RegExp(match);

		if (comments[i].innerText.match(re)) {
    	if (!comments[i].classList.contains(className)) {
    		comments[i].classList.add(className);
    	}
    }
  }

  var comments = slide.getElementsByClassName('comment');

  for (i = comments.length - 1; i >= 0; i--) {
    addExampleClass('✓', 'passingExample');
    addExampleClass('✕', 'failingExample');
  }
});
