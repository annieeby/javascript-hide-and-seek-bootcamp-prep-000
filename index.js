function getFirstSelector(selector){
return document.querySelector(selector)
}

function nestedTarget(){
return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  var lis = document.querySelectorAll(".ranked-list");
  for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = parseInt(i + n).toString();
  }
}

function deepestChild() {
  let grandNode = document.getElementById('grand-node')
  let nextNode = grandNode.children[0]
  while (nextNode) {
    grandNode = nextNode
    nextNode = grandNode.children[0]
    }
return grandNode
}

/*
ATTEMPT:
function deepestChild() {
  const grandnode = document.querySelectorAll('div#grand-node')
  var children = []
  var htmlChildren = []
  var deepChild = []
  while(grandnode.hasChildNodes) 
    children.push(grandnode.childNodes);
    htmlChildren.push(children.innerHTML)
    deepChild.push(htmlChildren[htmlChildren.length-1])
return deepChild
  }
*/

//document.getElementById("myP").innerHTML
  
//https://developer.mozilla.org/en-US/docs/Web/API/Node/hasChildNodes
/*
function deepestChild(){
  var grandnode = document.querySelector("div#grand-node");
  while (div#grand-node.hasChildNodes())
}
*/