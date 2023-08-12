<script setup lang="ts">
    const icons = ["mir.svg", "visa.svg", "mastercard.svg", "ypay.svg"];
</script>

<template>
    <div class="payment-icons">
        <div v-for="(icon, index) in icons" :key="index" class="payment-icons__image">
            <img :src="`/assets/payment/${icon}`" alt="" />
        </div>
    </div>
</template>

<style lang="scss">
    .payment-icons {
        display: flex;
        align-items: center;
        margin: 0 -5px;
        @include media($bp-desktop-sm) {
            margin: 0 -10px;
        }
    }

    .payment-icons__image {
        height: 15px;
        padding: 0 5px;
        img {
            height: 100%;
        }
        @include media($bp-desktop-sm) {
            height: 22px;
            padding: 0 10px;
        }
    }
</style>
