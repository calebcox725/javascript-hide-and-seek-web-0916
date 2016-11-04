var getFirstSelector = (selector) => {
  return document.querySelector(selector);
};

var nestedTarget = () => {
  return document.querySelector('#nested .target');
};

var deepestChild = () => {
  return document.querySelector('#grand-node div div div div');
};

var increaseRankBy = (n) => {
  var lis = document.querySelectorAll('.ranked-list li');
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = Number.parseInt(lis[i].innerHTML) + n;
  };
};