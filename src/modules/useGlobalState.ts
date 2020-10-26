import { createGlobalState } from '@vueuse/core'

export const useGlobalState = createGlobalState(() => {
  return {
    car: null,
    ws: null
  }
})