<template>
	<div v-if="products.length > 0" class="grid grid-cols-3 gap-3">
		<ProductItem v-for="product in products" :product="product" />
	</div>
	<div v-else class="flex text-gray-600 justify-center">
		No products found..
	</div>
</template>

<script setup lang="ts">
import ProductItem from "./ProductItem.vue"
import { IProduct } from "../types"

interface Props {
	products: IProduct[]
}

defineProps<Props>()
</script>

<style scoped></style>
