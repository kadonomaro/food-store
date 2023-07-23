<script setup lang="ts">
    import { storeToRefs } from "pinia";
    import { useProductsStore } from "~/store/products";

    const { products } = storeToRefs(useProductsStore());
    const { getProductsList } = useProductsStore();

    const isLoading = ref(false);

    onServerPrefetch(() => {
        return getProductsList();
    });

    onMounted(() => {
        if (products.value.length === 0) {
            isLoading.value = true;
            getProductsList().then(() => {
                isLoading.value = false;
            });
        }
    });
</script>

<template>
    <div class="home-page">
        <h1>Home page</h1>

        <h2 v-if="isLoading">Loading...</h2>
        <NuxtLink :to="{ name: 'reviews' }">Reviews</NuxtLink>

        <div v-for="product in products" :key="product.id" class="product">
            <div>
                <b>{{ product.name }}</b>
            </div>
            <div>{{ product.createdAt }}</div>
        </div>
    </div>
</template>

<style lang="scss"></style>
