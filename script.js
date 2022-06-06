const apiPromise = fetch("https://grandcircusco.github.io/demo-apis/donuts.json")
 .then(res => res.json())
 .then(data => {
     console.log(data);
     console.log(data.count);
});

let countPromise = new Promise((resolve, reject) => {
    apiPromise.then(data => {
        console.log(data.count);
    });
});