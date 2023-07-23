<script setup lang="ts">
    import { storeToRefs } from "pinia";
    import { useReviewsStore } from "~/store/reviews";

    const { reviews } = storeToRefs(useReviewsStore());
    const { getReviewsList } = useReviewsStore();

    const isLoading = ref(false);

    onServerPrefetch(() => {
        return getReviewsList();
    });

    onMounted(() => {
        if (reviews.value.length === 0) {
            isLoading.value = true;
            getReviewsList().then(() => {
                isLoading.value = false;
            });
        }
    });
</script>

<template>
    <div class="reviews-page">
        <h1>Reviews page</h1>
        <NuxtLink :to="{ name: 'index' }">Home</NuxtLink>
        <div v-for="review in reviews" :key="review.id" class="review">
            <div>
                <b>{{ review.author }}</b>
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>
