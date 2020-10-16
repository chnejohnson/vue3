import { computed, ref } from "vue";
import { fetchCar } from "../api/car";
import { Car } from "../interface/Car";
import { useGlobalState } from "../modules/useGlobalState";

export default function useCards() {
  const car = ref<Car[]>(null);

  const getCar = async (license: string) => {
    car.value = await fetchCar(license);

    // 將取得的 car.value 存入 globalState
    const state = useGlobalState();
    state.car = car.value;
  };

  return { car: computed(() => car.value), getCar };
}
