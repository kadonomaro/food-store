<script setup lang="ts">
    const onScroll = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
</script>

<template>
    <nuxt-link :to="{ name: 'index' }" class="the-logo" @click.prevent="onScroll">
        <img src="/assets/logo.svg" alt="" />
    </nuxt-link>
</template>

<style lang="scss">
    .the-logo {
        position: relative;
        display: block;
        height: 40px;
        img {
            height: 100%;
        }
        @include media($bp-desktop-sm) {
            height: 50px;
        }
    }
</style>
