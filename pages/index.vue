<script setup lang="ts">
    import { storeToRefs } from "pinia";
    import { buildQuery } from "~/utils";
    import { useMeta } from "~/composables/useMeta";
    import { useCategoriesStore, useProductsStore, useReviewsStore } from "~/store";

    const { products } = storeToRefs(useProductsStore());
    const { reviews } = storeToRefs(useReviewsStore());
    const { activeCategoryId } = storeToRefs(useCategoriesStore());
    const { getProductsList } = useProductsStore();
    const { getReviewsList } = useReviewsStore();

    const isLoadingProducts = ref(false);
    const isLoadingReviews = ref(false);

    const getProductsWithQuery = async () => {
        isLoadingProducts.value = true;
        const query = buildQuery({ "fields.category.sys.id[in]": activeCategoryId.value, order: "fields.price" });
        await getProductsList(query);
        isLoadingProducts.value = false;
    };

    onServerPrefetch(() => {
        return Promise.all([getProductsWithQuery(), getReviewsList({ order: "-fields.date" })]);
    });

    onMounted(async () => {
        if (products.value.length === 0 || activeCategoryId.value.length > 0) {
            await getProductsWithQuery();
        }

        if (reviews.value.length === 0) {
            isLoadingReviews.value = true;
            await getReviewsList();
            isLoadingReviews.value = false;
        }
    });

    useMeta("home");
</script>

<template>
    <div class="home-page">
        <div class="home-page__banner">
            <div class="container">
                <home-banner></home-banner>
            </div>
        </div>

        <div class="home-page__categories">
            <div class="container">
                <home-categories :is-disabled="isLoadingProducts" @on-select="getProductsWithQuery"></home-categories>
            </div>
        </div>

        <div class="home-page__catalog">
            <div class="container">
                <product-catalog :products="products" :is-loading="isLoadingProducts"></product-catalog>
            </div>
        </div>

        <div class="home-page__reviews">
            <div class="container">
                <home-reviews :reviews="reviews" :is-loading="isLoadingReviews"></home-reviews>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .home-page {
        background-color: var(--primary-background);
        @include media($bp-desktop-sm) {
            padding-top: 40px;
        }
    }

    .home-page__reviews {
        background-color: #fff;
    }
</style>
