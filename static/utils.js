function preventImpatience (anchor) {
    anchor.style['pointer-events'] = 'none';
    setTimeout(function () { anchor.style['pointer-events'] = 'auto'; }, 1500);
};
