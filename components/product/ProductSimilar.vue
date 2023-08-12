<script setup lang="ts">
    import { api } from "~/api";
    import { IProduct } from "~/api/services/products/types";
    import { useSwiper } from "~/composables/useSwiper";

    type Props = {
        productId: string;
        categoryId: string;
    };

    const { productId, categoryId } = defineProps<Props>();

    const productsList = ref<IProduct[]>([]);

    const { swiperOptions } = useSwiper("productSimilar");

    const getProductList = async () => {
        const query = { "sys.id[nin]": productId, "fields.category.sys.id[in]": categoryId };
        productsList.value = await api.products.getAll(query);
    };

    onMounted(() => {
        getProductList();
    });
</script>

<template>
    <div v-if="productsList.length > 0" class="product-similar">
        <h2 class="product-similar__title page-title">Вам могут понравиться</h2>
        <swiper class="product-similar__slider" :slides-per-view="1.3" :space-between="10" :breakpoints="swiperOptions">
            <swiper-slide v-for="product in productsList" :key="product.id">
                <div class="home-reviews__item">
                    <product-card :product="product"></product-card>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<style lang="scss">
    .product-similar__title {
        margin-bottom: 15px;
        @include media($bp-desktop-sm) {
            margin-bottom: 30px;
        }
    }

    .product-similar__slider {
        margin: 0 -10px;
        padding: 0 10px;
        .swiper-slide {
            height: auto;
        }
        @include media($bp-desktop-sm) {
            margin: 0;
            padding: 0;
        }
    }
</style>
