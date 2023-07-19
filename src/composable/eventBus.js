import {ref} from "vue";

const bus = ref(new Map());

export default function useEventBus() {
	function emit(event, ...values) {
		bus.value.set(event, values);
	}

	return {
		emit,
		bus,
	};
}

