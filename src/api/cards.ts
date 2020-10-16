import http from "./index";

async function fetchCards(type: string) {
  const { data } = await http.get("/cards");
  return data;
}

export { fetchCards };

// function fakeCards(type) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (type === "warning") {
//         resolve(cards);
//       } else {
//         reject("error");
//       }
//     }, 2000);
//   });
// }
