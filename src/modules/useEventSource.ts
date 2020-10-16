import { ref, Ref } from "vue-demi";
import { useEventListener } from "@vueuse/core";
import { tryOnMounted, tryOnUnmounted } from "@vueuse/core";

// EventSource Constructor
// https://developer.mozilla.org/en-US/docs/Web/API/EventSource/EventSource

export function useEventSource(url: string, events: Array<string> = []) {
  const event: Ref<string | null> = ref(null);
  const data: Ref<string | null> = ref(null);
  const status = ref("DISCONNECT") as Ref<"DISCONNECT" | "OPEN" | "CONNECTING" | "CLOSED">;
  const eventSource = ref(null) as Ref<EventSource | null>;
  const error = ref(null) as Ref<Event | null>;

  const close = () => {
    if (eventSource.value) {
      eventSource.value.close();
      eventSource.value = null;
      status.value = "CLOSED";
    }
  };

  const connect = () => {
    const es = new EventSource(url);

    eventSource.value = es;

    status.value = "CONNECTING";

    es.onopen = () => {
      status.value = "OPEN";
      error.value = null;
    };

    es.onerror = e => {
      status.value = "CLOSED";
      error.value = e;
      close();
    };

    es.onmessage = (e: MessageEvent) => {
      event.value = null;
      data.value = e.data;
    };

    for (const event_name of events) {
      useEventListener(event_name, (e: Event & { data?: string }) => {
        event.value = event_name;
        data.value = e.data || null;
      });
    }
  };

  tryOnUnmounted(() => {
    close();
  });

  return {
    eventSource,
    event,
    data,
    status,
    error,
    close,
    connect
  };
}

// import { computed, ref } from "vue";

// export function useEventSource(url: string) {
//   const state = ref<string>("");

//   const source = new EventSource(url);

//   source.onopen = e => {
//     // 只有當第一筆訊息傳進來的時候才會發動
//     console.log("event source opened");
//   };

//   source.onmessage = function (e) {
//     state.value = e.data;
//   };

//   // source.onerror = function () {
//   //   console.log("EventSource failed.");
//   //   source.close();
//   // };

//   const close = () => {
//     source.close();
//   };

//   return {
//     state: computed(() => state.value),
//     close
//   };
// }
