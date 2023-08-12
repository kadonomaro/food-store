<script setup lang="ts">
    import { storeToRefs } from "pinia";
    import { useCategoriesStore } from "~/store";

    const { categories } = storeToRefs(useCategoriesStore());
    const { getCategoriesList, setActiveCategory } = useCategoriesStore();

    type Props = {
        productName: string;
        productCategoryId: string;
    };

    const { productCategoryId } = defineProps<Props>();

    const productCategory = computed(() => {
        return categories.value.find((category) => category.id === productCategoryId);
    });

    onMounted(async () => {
        if (categories.value.length === 0) {
            await getCategoriesList({ order: "fields.sort" });
        }
    });
</script>

<template>
    <div class="product-breadcrumbs">
        <nuxt-link class="product-breadcrumbs__link" :to="{ name: 'index' }">Главная</nuxt-link>
        <nuxt-link
            v-if="productCategory"
            class="product-breadcrumbs__link"
            :to="{ name: 'index' }"
            @click.native="setActiveCategory(productCategory.id)"
        >
            {{ productCategory.name }}
        </nuxt-link>
        <span class="product-breadcrumbs__link">{{ productName }}</span>
    </div>
</template>

<style lang="scss">
    .product-breadcrumbs {
        display: flex;
        flex-wrap: wrap;
    }

    .product-breadcrumbs__link {
        display: block;
        color: #000;
        font-size: 12px;
        font-weight: 500;
        line-height: 16px;
        text-decoration: none;
        transition: color 0.2s ease-in;
        &:hover {
            color: #3f8fd2;
        }
        &:not(:last-child) {
            &::after {
                content: "/";
                margin: 0 5px;
                color: #3f8fd2;
            }
        }
        &:last-child {
            color: var(--secondary-text);
        }
        @include media($bp-desktop-sm) {
            font-size: 16px;
            line-height: 20px;
            &:not(:last-child) {
                &::after {
                    margin: 0 10px;
                }
            }
        }
    }
</style>
