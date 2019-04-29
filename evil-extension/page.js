const MATCH_LIST = {
  'there': 'their',
  'their': 'there',
  'they\'re': 'there',
  'There': 'Their',
  'Their': 'There',
  'They\'re': 'There',
  'THERE': 'THEIR',
  'THEIR': 'THERE',
  'THEY\'RE': 'THERE'
};

function transformTextNodes(node) {
  if (node.nodeType == Node.TEXT_NODE) {
    node.textContent = node.textContent.replace(new RegExp(MATCH_LIST.there, "g"), '1#1');
    node.textContent = node.textContent.replace(new RegExp(MATCH_LIST.their, "g"), '2#2');
    node.textContent = node.textContent.replace(new RegExp('they\'re', "g"), '3#3');
    node.textContent = node.textContent.replace(new RegExp('3#3', "g"), MATCH_LIST["they're"]);
    node.textContent = node.textContent.replace(new RegExp('2#2', "g"), MATCH_LIST.there);
    node.textContent = node.textContent.replace(new RegExp('1#1', "g"), MATCH_LIST.their);

    node.textContent = node.textContent.replace(new RegExp(MATCH_LIST.There, "g"), '4#4');
    node.textContent = node.textContent.replace(new RegExp(MATCH_LIST.Their, "g"), '5#5');
    node.textContent = node.textContent.replace(new RegExp('They\'re', "g"), '6#6');
    node.textContent = node.textContent.replace(new RegExp('6#6', "g"), MATCH_LIST["They're"]);
    node.textContent = node.textContent.replace(new RegExp('5#5', "g"), MATCH_LIST.There);
    node.textContent = node.textContent.replace(new RegExp('4#4', "g"), MATCH_LIST.Their);

    node.textContent = node.textContent.replace(new RegExp(MATCH_LIST.THERE, "g"), '7#7');
    node.textContent = node.textContent.replace(new RegExp(MATCH_LIST.THEIR, "g"), '8#8');
    node.textContent = node.textContent.replace(new RegExp('THEY\'RE', "g"), '9#9');
    node.textContent = node.textContent.replace(new RegExp('9#9', "g"), MATCH_LIST["THEY'RE"]);
    node.textContent = node.textContent.replace(new RegExp('8#8', "g"), MATCH_LIST.THERE);
    node.textContent = node.textContent.replace(new RegExp('7#7', "g"), MATCH_LIST.THEIR);
  }
  for (const child of node.childNodes) {
    transformTextNodes(child);
  }
  // TODO(you): Implement this function! See HW spec for details.
}

transformTextNodes(document.body);

// Log statement to test that the extension loaded properly.
console.log('Evil extension loaded!');