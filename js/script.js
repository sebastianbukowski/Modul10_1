var flkty = new Flickity( '.main-carousel', {
  "cellAlign": "center", "contain": true, "pageDots": false, "freeScroll": true, "wrapAround": true, "groupCells": true, "adaptiveHeight": true,   "arrowShape": true,  "prevNextButtons": true, "draggable": true, "draggable": true,  "isWrapped": true, "hash": true, "arrowShape": { x0: 10,
    x1: 40, y1: 50,
    x2: 80, y2: 50,
    x3: 50
}
});
var resetButton = document.querySelector('.button--reset');
resetButton.addEventListener( 'click', function() {
  flkty.selectCell(0);
});
var progressBar = document.querySelector('.progress-bar')
flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});
