function bubbleSort(arr) {
  k = 17;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] + arr[j + 1] == k) {
        return true;
      }
    }
  }

  return false;
}

// Exemple d'utilisation
let arr = [10, 15, 3, 7];
console.log(bubbleSort(arr));
