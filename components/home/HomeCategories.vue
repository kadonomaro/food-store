<script setup lang="ts">
    import { storeToRefs } from "pinia";
    import { useCategoriesStore } from "~/store/categories";

    type Props = {
        isDisabled?: boolean;
    };

    defineProps<Props>();
    const emit = defineEmits(["on-select"]);

    const { categories } = storeToRefs(useCategoriesStore());
    const { getCategoriesList } = useCategoriesStore();

    const isLoading = ref(false);
    const categoryId = ref("");

    const onSelectCategory = (id: string) => {
        categoryId.value = id;
        emit("on-select", id);
    };

    const getCategoriesWithQuery = () => {
        return getCategoriesList({ order: "fields.sort" });
    };

    onServerPrefetch(() => {
        return getCategoriesWithQuery();
    });

    onMounted(async () => {
        if (categories.value.length === 0) {
            isLoading.value = true;
            await getCategoriesWithQuery();
            isLoading.value = false;
        }
    });
</script>

<template>
    <div class="home-categories">
        <h1 class="home-categories__title page-title">Популярные категории</h1>
        <div class="home-categories__list">
            <button
                class="home-categories__button"
                :class="{ 'is-active': categoryId === '' }"
                :disabled="isDisabled"
                @click="onSelectCategory('')"
            >
                <img class="home-categories__image" src="/assets/home/categories/all.png" alt="" />
                Все товары
            </button>

            <button
                v-for="category in categories"
                :key="category.id"
                class="home-categories__button"
                :class="{ 'is-active': categoryId === category.id }"
                :disabled="isDisabled"
                @click="onSelectCategory(category.id)"
            >
                <img class="home-categories__image" :src="category.image" alt="" />
                {{ category.name }}
            </button>
        </div>
    </div>
</template>

<style lang="scss">
    .home-categories {
        padding: 20px 0 30px;
        @include media($bp-desktop-sm) {
            padding: 40px 0 60px;
        }
    }

    .home-categories__title {
        margin-bottom: 15px;
        @include media($bp-desktop-sm) {
            margin-bottom: 30px;
        }
    }

    .home-categories__list {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 -10px;
        padding: 0 10px 10px;
        overflow: auto;
        @include media($bp-desktop-sm) {
            margin: 0;
            padding: 0;
            overflow: hidden;
        }
    }

    .home-categories__button {
        position: relative;
        padding: 9px 16px;
        color: var(--primary-color);
        font-size: 14px;
        line-height: 18px;
        font-weight: 600;
        text-align: center;
        text-decoration: none;
        white-space: nowrap;
        background-color: transparent;
        border-radius: 8px;
        transition:
            color 0.2s ease-in,
            background-color 0.2s ease-in;
        &:not(:last-child) {
            margin-right: 6px;
        }
        &:disabled {
            pointer-events: none;
        }
        &.is-active {
            color: var(--primary-color--hover);
            background-color: #fff;
            cursor: auto;
        }
        @include media($bp-desktop-sm) {
            flex-grow: 1;
            padding: 15px;
            font-size: 18px;
            line-height: 22px;
            letter-spacing: 0.03em;
            border-radius: 12px;
            &:not(:last-child) {
                margin-right: 10px;
            }
            &:hover:not(.is-active) {
                &::before {
                    opacity: 1;
                }
                .home-categories__image {
                    transform: translateY(-5px);
                }
            }
            &::before {
                content: "";
                position: absolute;
                top: 65px;
                left: calc(50% - 20px);
                width: 40px;
                height: 8px;
                background-color: rgba(#000, 0.2);
                border-radius: 50%;
                opacity: 0;
                transition:
                    opacity 0.2s ease-in,
                    transform 0.2s ease-in;
            }
        }
    }

    .home-categories__image {
        width: 30px;
        height: 30px;
        margin: 0 auto 10px;
        @include media($bp-desktop-sm) {
            width: 50px;
            height: 50px;
            margin-bottom: 15px;
            transition: transform 0.2s ease-in;
        }
    }
</style>
