const url = "https://api.github.com/users/AyushRajput1709";
const res = fetch(url);
res
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });
