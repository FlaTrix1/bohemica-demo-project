<template>
	<div class="w-full">
		<input
			:modelValue="model"
			type="text"
			class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-0 block w-full p-2.5"
			placeholder="Search for products..."
			required
			@input="setModel"
		/>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const emits = defineEmits(["fetch"])

const model = ref("")
let timeoutID: ReturnType<typeof setTimeout>

const debounce = (fn: Function, delay: number) => {
	return (...args: any[]) => {
		clearTimeout(timeoutID)
		timeoutID = setTimeout(() => {
			fn(...args)
		}, delay)
	}
}

const setModel = (e: Event) => {
	if (e.target instanceof HTMLInputElement) {
		model.value = e.target.value

		debounce(() => {
			emits("fetch", model.value)
		}, 300)()
	}
}
</script>

<style lang="scss" scoped></style>
