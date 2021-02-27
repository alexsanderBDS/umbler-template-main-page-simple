fetch("http://localhost:3000/posts")
  .then((result) => {
    result.json().then((res) => {
      console.log(res);
    });
  })
  .catch((err) => {
    console.log(err);
  });

console.log("teste");
