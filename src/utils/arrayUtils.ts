export function overrideItemAtIndex<T>(
  array: T[],
  newItem: T,
  targetIndex: number
) {
  return array.map((item, index) => {
    if (index !== targetIndex) {
      return item;
    }

    return newItem;
  });
}

export function removeItemAtIndex<T>(
  array: T[],
  index: number
) {
  return [
    ...array.slice(0, index),
    ...array.slice(index + 1),
  ];
}

export function insertItemAtIndex<T>(
  array: T[],
  item: T,
  index: number
) {
  return [
    ...array.slice(0, index),
    item,
    ...array.slice(index),
  ];
}

export function moveItem<T>(
  array: T[],
  from: number,
  to: number
) {
  const item = array[from];
  const afterRemove = removeItemAtIndex(array, from);
  return insertItemAtIndex(afterRemove, item, to);
}
