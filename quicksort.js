
var arr = [35,33,42,10,14,19,27,44,26,31];

function swap(arr, lo, hi) {
  var temp = arr[lo];
  arr[lo] = arr[hi];
  arr[hi] = temp;
}

function lo_findlargerThanPivot(arr, pivot, lo, hi, decrementHiCallBack) {

  console.log("lo_findlargerThanPivot - " + "lo: " + lo + ", hi: " + hi);
  while (lo < hi) {
    if (arr[lo] > pivot) {
        console.log("Larger than PIVOT " + arr[lo] + " found! at index " + lo);
        decrementHiCallBack();
        return lo;
    }
    console.log(arr[lo] + " is smaller than pivot: " + pivot +  ", √.");
    lo++;
    console.log(" lo incremented to " + lo);
  }
  return lo;
}

function hi_findLessThanPivot(arr, pivot, lo, hi) {

  console.log("\nhi_findLessThanPivot - " + "lo: " + lo + ", hi: " + hi);
  while (hi > lo) {
    if (arr[hi] < pivot) {
      console.log("Smaller than PIVOT found for right side: " + arr[hi] + ", at index: " + hi);
      return hi;
    }
    hi--;
    console.log(arr[hi] + " is larger than pivot: " + pivot +  ", √." + " hi decremented to " + hi);
  }
  return hi;
}


function partition(arr, low, high) {
  var pivot = arr[high];
  var hi = high;
  var lo = low;

  do {
    console.log("\n---- PASS ----");
    lo = lo_findlargerThanPivot(arr, pivot, lo, hi, function() {
      hi--; console.log("Its hi's turn now! Decremented hi to : " + hi + " to find element smaller than pivot " + pivot);
    });

    hi = hi_findLessThanPivot(arr, pivot, lo, hi);

    if (lo < hi) {
      swap(arr, lo, hi);
      lo++;
    }
  } while (lo < hi);

  console.log("final step! swap element lo " +  arr[lo] + ", with pivot " + arr[high]);
  swap(arr, lo, high);
  return lo;
} // partition


function divAndConq(arr, low, high) {

  console.log("\ndivAndConq: [" + low + ", " + high + "]");

  if (low < high) {
    var pi = partition(arr, low, high);
    console.log(low + " < " + high + "? √, " + "middle is: " + pi);

    divAndConq(arr, low, pi-1);
    divAndConq(arr, pi + 1, high);

  } else {
    console.log(low + " < " + high + "? X");
  }
}

console.log(arr);
divAndConq(arr, 0, arr.length-1);
console.log(arr);
