<script setup lang="ts">
    import { api } from "~/api";

    const products = ref([]);
    const reviews = ref([]);

    onMounted(() => {
        api.products.getAll().then((response) => {
            products.value = response;
        });

        api.reviews.getAll().then((response) => {
            reviews.value = response;
        });
    });
</script>

<template>
    <div class="home-page"></div>
</template>

<style lang="scss"></style>
