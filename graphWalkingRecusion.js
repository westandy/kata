const influences = [
  ['Lisp', 'Smalltalk'],
  ['Lisp', 'Scheme'],
  ['Smalltalk', 'Self'],
  ['Scheme', 'JavaScript'],
  ['Scheme', 'Lua'],
  ['Self', 'Lua'],
  ['Self', 'JavaScript']
];
console.log(nexts(influences, ['Lisp', 'Scheme']));

function nexts(graph, node) {
  if (graph == undefined || graph == null || graph.length == 0) {
    return [];
  }

  const first = graph[0];
  const pair = first[0];
  const to = first[1];
  const more = graph.slice(0);
  if (node[0] == first[0] && node[1] == first[1]) {
    return to;

    //   return [to, ...nexts(more, node)];
  } /* else {
    return nexts(more, node);
  }*/
}
