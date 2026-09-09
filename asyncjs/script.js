// function getData(id, nextdata){
//     setTimeout(()=>{
//         console.log("data = "+ id)
//         if(nextdata){
//             nextdata();
//         }
//     },2000)
// }

// getData(1, ()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4, ()=>{
//                 getData(5);
//             });
//         });
//     })
// });

// function getData2(id, nextdata){
//     setTimeout(()=>{
//         console.log("data2 = "+ id)
//         if(nextdata){
//             nextdata();
//         }
//     },1000)
// }

// getData2(1, ()=>{
//     getData2(2,()=>{
//         getData2(3,()=>{
//             getData2(4, ()=>{
//                 getData2(5);
//             });
//         });
//     })
// });

function getData(id, nextdata) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("data = " + id);
      res("success");
      if (nextdata) {
        nextdata();
      }
    }, 4000);
  });
}

// getData(1)
//   .then((res) => {
//     return getData(2);
//   })
//   .then((res) => {
//     return getData(3);
//   })
//   .then((res) => {
//     console.log("Completewd");
//   });

async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
}

getAllData();







  let url ="https://catfact.ninja/fact";
  const getFacts = async ()=>{
    console.log("Data vasthundhi wait cheyy");
    // let response = fetch(url);
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(data);

  }
  getFacts();

