function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('a & b need to be numbers');
    }
  });
}

addPromise(2, 4).then(function (sum) {
  console.log('success', sum);
}, function(err) {
  console.log ('error', err);
});

addPromise("chuck", 4).then(function (sum) {
  console.log('no way', sum);
}, function(err) {
  console.log ('this is wrong', err);
});
