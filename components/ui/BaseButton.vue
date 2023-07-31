<script setup lang="ts">
    import { Icon } from "~/components/ui/types";

    type Props = {
        icon?: Icon;
    };

    defineProps<Props>();
</script>

<template>
    <button class="base-button">
        <slot></slot>
        <span v-if="icon" class="base-button__icon">
            <base-icon :name="icon"></base-icon>
        </span>
    </button>
</template>

<style lang="scss">
    .base-button {
        display: block;
        padding: 12px 20px;
        color: #fff;
        font-size: 18px;
        font-weight: 600;
        line-height: 22px;
        letter-spacing: 0.03em;
        text-align: center;
        text-decoration: none;
        background-color: var(--primary-color--hover);
        border-radius: 12px;
        transition:
            color 0.2s ease-in,
            background-color 0.2s ease-in;
    }
</style>
