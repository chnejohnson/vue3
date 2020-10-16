import http from "./index";

async function fetchCar(license: string) {
  const { data } = await http.get(`/car/${license}`);
  return data;
}

export { fetchCar };
