<script setup lang="ts">
    import { buildQuery } from "~/utils";
    import { api } from "~/api";
    import { IProduct } from "~/api/services/products/types";

    const search = ref("");
    const isLoading = ref(false);
    const isActive = ref(false);
    const productsList = ref<IProduct[]>([]);

    const onSubmit = async () => {
        if (isLoading.value) {
            return;
        }
        if (search.value.length === 0) {
            productsList.value.length = 0;
            return;
        }
        isLoading.value = true;
        const query = buildQuery({ "fields.name[match]": search.value });
        productsList.value = await api.products.getAll(query);
        isLoading.value = false;
        if (productsList.value.length > 0) {
            isActive.value = true;
        }
    };

    const onClickOutside = () => {
        isActive.value = false;
    };

    const onFocus = () => {
        if (productsList.value.length > 0) {
            isActive.value = true;
        }
    };

    const onClear = () => {
        search.value = "";
        productsList.value.length = 0;
    };
</script>

<template>
    <div class="the-header-search" v-click-outside="onClickOutside">
        <form class="the-header-search__form" @submit.prevent="onSubmit">
            <base-input
                v-model="search"
                placeholder="Найти что съесть"
                clearable
                @focus="onFocus"
                @on-clear="onClear"
            ></base-input>
        </form>
        <div v-if="productsList.length > 0 && isActive" class="the-header-search__list">
            <nuxt-link
                v-for="product in productsList"
                :key="product.id"
                :to="{ name: 'products-slug', params: { slug: product.slug } }"
                class="the-header-search__product"
            >
                <div class="the-header-search__image">
                    <img :src="product.imagePreview" alt="" />
                </div>
                <div class="the-header-search__name">{{ product.name }}</div>
                <div class="the-header-search__price">{{ product.price }}&nbsp;₽</div>
            </nuxt-link>
        </div>
    </div>
</template>

<style lang="scss">
    .the-header-search {
        @include media($bp-desktop-sm) {
            position: relative;
        }
    }

    .the-header-search__form {
        @include media($bp-desktop-sm) {
            position: relative;
            z-index: 21;
        }
    }

    .the-header-search__list {
        @include media($bp-desktop-sm) {
            position: absolute;
            z-index: 20;
            left: 0;
            right: 0;
            top: calc(100% - 10px);
            max-height: 300px;
            padding: 25px 15px 15px;
            background-color: #fff;
            border-radius: 0 0 var(--border-radius--md) var(--border-radius--md);
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
            overflow: auto;
        }
    }

    .the-header-search__product {
        @include media($bp-desktop-sm) {
            display: flex;
            align-items: center;
            color: var(--primary-text);
            text-decoration: none;
            &:not(:last-child) {
                margin-bottom: 10px;
            }
            &:hover {
                .the-header-search__name {
                    color: #3f8fd2;
                }
            }
        }
    }

    .the-header-search__image {
        @include media($bp-desktop-sm) {
            width: 30px;
            height: 30px;
            margin-right: 10px;
        }
    }

    .the-header-search__name {
        @include media($bp-desktop-sm) {
            margin-right: auto;
            font-size: 14px;
            line-height: 18px;
            font-weight: 500;
            transition: color 0.2s ease-in;
        }
    }

    .the-header-search__price {
        @include media($bp-desktop-sm) {
            font-size: 16px;
            font-weight: 700;
        }
    }
</style>
