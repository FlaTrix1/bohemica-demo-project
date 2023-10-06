<script setup lang="ts">
import { ref } from "vue"
import { IProductRes, IProduct } from "./types"
import SearchBar from "./components/SearchBar.vue"
import ProductList from "./components/ProductList.vue"

const products = ref<IProduct[]>([])

const fetchProducts = async (search?: string) => {
	const res = await fetch(
		`${import.meta.env.VITE_BE_URL}/products?search=${search || ""}`
	)
	const data = (await res.json()) as IProductRes
	products.value = [...data]
}

fetchProducts()
</script>

<template>
	<div class="m-4">
		<SearchBar @fetch="fetchProducts" />

		<div class="mt-4">
			<ProductList :products="products" />
		</div>
	</div>
</template>
