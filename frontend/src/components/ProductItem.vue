<template>
	<div
		class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow"
	>
		<a href="#">
			<img
				class="p-8 rounded-t-lg"
				src="https://cdn.shopify.com/s/files/1/0070/7032/files/image5_4578a9e6-2eff-4a5a-8d8c-9292252ec848.jpg?v=1620247043"
				alt="product image"
			/>
		</a>
		<div class="px-5 pb-5">
			<a href="#">
				<h5 class="text-xl font-semibold tracking-tight text-gray-900">
					{{ product.name }}
				</h5>
			</a>
			<div class="flex items-center mt-2.5 mb-5">
				<span
					class="bg-blue-100 text-xs text-blue-800 font-semibold mr-2 px-2.5 py-0.5 rounded"
					>{{ product.availability }}</span
				>
			</div>
			<div class="items-end">
				<span class="text-3xl font-bold text-gray-900"
					>${{ product.price }}</span
				>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { IProduct } from "../types"

interface Props {
	product: IProduct
}

defineProps<Props>()
</script>

<style scoped></style>
