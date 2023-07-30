<script setup lang="ts">
    type Props = {
        name: "star" | "arrow";
    };

    defineProps<Props>();
</script>

<template>
    <svg class="the-icon" :class="[`icon-${name}`]" xmlns="http://www.w3.org/2000/svg">
        <use
            :xlink:href="`/public/sprites.svg#${name}`"
            xmlns:xlink="http://www.w3.org/1999/xlink"
        ></use>
    </svg>
</template>

<style lang="scss"></style>
