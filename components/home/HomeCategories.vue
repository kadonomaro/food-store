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
                <img src="" alt="" />
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
                <img src="" alt="" />
                {{ category.name }}
            </button>
        </div>
    </div>
</template>

<style lang="scss">
    .home-categories {
        padding: 24px 0 30px;
        @include media($bp-desktop-sm) {
            padding: 48px 0 60px;
        }
    }

    .home-categories__title {
        margin-bottom: 15px;
        @include media($bp-desktop-sm) {
            margin-bottom: 30px;
        }
    }

    .home-categories__list {
        @include media($bp-desktop-sm) {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }

    .home-categories__button {
        @include media($bp-desktop-sm) {
            padding: 12px 20px;
            color: var(--primary-color);
            font-size: 18px;
            font-weight: 500;
            line-height: 22px;
            letter-spacing: 0.03em;
            text-align: center;
            text-decoration: none;
            background-color: #fff;
            border-radius: 12px;
            transition:
                color 0.2s ease-in,
                background-color 0.2s ease-in;
            &:hover {
                color: var(--primary-color--hover);
            }
            &:disabled {
                pointer-events: none;
            }
            &.is-active {
                color: #fff;
                background-color: var(--primary-color--hover);
            }
        }
    }
</style>
