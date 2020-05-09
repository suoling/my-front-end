function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, '1');
  });
}

timeout(100).then((value) => {
  console.log(value);
});