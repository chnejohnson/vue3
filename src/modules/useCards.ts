import { computed, ref } from "vue";
import { fetchCards } from "../api/cards";
import { Card } from "../interface/Card";

export default function useCards() {
  const cards = ref<Card[]>([]);

  const getCards = async (type: string) => {
    cards.value = await fetchCards(type);
  };

  // setTimeout(() => {
  //   cards.value.push({
  //     id: "2",
  //     type: "warning",
  //     status: "水量供需異常",
  //     color: "yellow",
  //     position: "辦公大樓一樓",
  //     beforeNum: 170,
  //     afterNum: 3,
  //     quantityNum: 25.7,
  //     pointer1: 0,
  //     pointer2: 2
  //   });
  // }, 7000);

  setTimeout(() => {
    console.log(cards);
    // cards.value[0].position = "教學大樓";
  }, 7000);

  return { cards: computed(() => cards.value), getCards };
}

// import { computed, reactive, toRefs, ref } from "vue";
// import axios from "axios";

// const state = reactive({
//   error: null,
//   cards: null
// });

// const loading = ref(false);

// export default function useCards() {
//   const load = async () => {
//     try {
//       loading.value = true;
//       const { data } = await axios.post("http://localhost:4000/cards", {
//         type: "warning"
//       });

//       state.cards = data.retData.list;
//     } catch (e) {
//       state.error = e;
//     } finally {
//       loading.value = false;
//     }
//   };

//   return { ...toRefs(state), load, loading: computed(() => loading.value) };
// }
