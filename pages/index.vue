<script setup lang="ts">
    import { storeToRefs } from "pinia";
    import { useProductsStore } from "~/store/products";
    import { useMeta } from "~/composables/useMeta";
    import { useReviewsStore } from "~/store/reviews";

    const { products } = storeToRefs(useProductsStore());
    const { reviews } = storeToRefs(useReviewsStore());
    const { getProductsList } = useProductsStore();
    const { getReviewsList } = useReviewsStore();

    const isLoadingProducts = ref(false);
    const isLoadingReviews = ref(false);

    const onSelectCategory = async (categoryId: string) => {
        isLoadingProducts.value = true;
        const query = categoryId ? { "fields.category.sys.id[in]": categoryId } : undefined;
        await getProductsList(query);
        isLoadingProducts.value = false;
    };

    onServerPrefetch(() => {
        return Promise.all([getProductsList(), getReviewsList({ order: "-fields.date" })]);
    });

    onMounted(async () => {
        if (products.value.length === 0) {
            isLoadingProducts.value = true;
            await getProductsList();
            isLoadingProducts.value = false;
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
                <home-categories
                    :is-disabled="isLoadingProducts"
                    @on-select="onSelectCategory"
                ></home-categories>
            </div>
        </div>

        <div class="home-page__catalog">
            <div class="container">
                <product-catalog
                    :products="products"
                    :is-loading="isLoadingProducts"
                ></product-catalog>
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
            padding-top: 30px;
        }
    }

    .home-page__reviews {
        background-color: #fff;
    }
</style>
