export function computeWinner(cells, sequenceSize = 5, fieldSize = 19) {
  const gap = Math.floor(sequenceSize / 2);

  function compareElements(indexes) {
    let result = true;
    for (let i = 1; i < indexes.length; i++) {
      result &&= !!cells[indexes[i]];
      result &&= cells[indexes[i]] === cells[indexes[i - 1]];
    }
    return result;
  }

  function getSequenceIndexes(i) {
    const res = [
      [], // -
      [], // \
      [], // /
      [], // |
    ];
    for (let j = 0; j < sequenceSize; j++) {
      res[0].push(j - gap + i);
      res[1].push(fieldSize * (j - gap) + (j - gap) + i);
      res[2].push(-fieldSize * (j - gap) + (j - gap) + i);
      res[3].push(fieldSize * (j - gap) + i);
    }

    const x = i % fieldSize;
    if (x < gap || x >= fieldSize - gap) {
      res.shift();
      res.shift();
      res.shift();
    }
    return res;
  }
  for (let i = 0; i < cells.length; i++) {
    if (cells[i]) {
      const indexRow = getSequenceIndexes(i);
      const winnerIndexes = indexRow.find((row) => compareElements(row));
      if (winnerIndexes) {
        return winnerIndexes;
      }
    }
  }
  return undefined;
}
