export const QuickSort = (list) => {
    if (list.length < 2) {
        return list; 
    }

    let pivot = list[0];
    let left  = []; 
    let right = [];

    for (let i = 1, total = list.length; i < total; i++){
      if (list[i] < pivot)
        left.push(list[i]);
      else
        right.push(list[i]);
    }  return [
      ...QuickSort(left), 
      pivot, 
      ...QuickSort(right)
    ];
  };