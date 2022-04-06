let start = 10;
let end = 8;
let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (start > end) {
      resolve(true);
    } else reject(false);
  }, 1000);
});

// let promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (start > end) {
//       resolve("chuyen tien");
//     } else reject("nhan tien");
//   }, 2000);
// });

promise1
  .then((data) => {
    let promise2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(start - end);
        } else reject("nhan tien");
      }, 2000);
    });
    promise2
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });

// promise2
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
