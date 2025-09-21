const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const username = params.get('file');
const image = $('img.image');
image.attr('src',image.attr('src')+username);
