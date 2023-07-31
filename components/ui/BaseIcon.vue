<script setup lang="ts">
    import { Icon } from "~/components/ui/types";

    type Props = {
        name: Icon;
    };

    defineProps<Props>();
</script>

<template>
    <svg class="base-icon" :class="[`icon-${name}`]" xmlns="http://www.w3.org/2000/svg">
        <use :xlink:href="`/assets/sprites.svg#${name}`" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
    </svg>
</template>

<style lang="scss"></style>
