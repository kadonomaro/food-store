<script setup lang="ts">
    type Props = {
        modelValue: string;
        placeholder: string;
        clearable: boolean;
    };

    withDefaults(defineProps<Props>(), {
        modelValue: "",
        placeholder: "",
    });

    const emit = defineEmits(["update:modelValue", "focus", "on-clear"]);
</script>

<template>
    <label class="base-input">
        <input
            class="base-input__field"
            :value="modelValue"
            type="text"
            :placeholder="placeholder"
            @input="emit('update:modelValue', $event.target.value)"
            @focus="emit('focus')"
        />
        <base-icon
            v-if="clearable && modelValue.length > 0"
            class="base-input__icon"
            name="close"
            @click="emit('on-clear')"
        ></base-icon>
    </label>
</template>

<style lang="scss">
    .base-input {
        display: block;
        position: relative;
    }

    .base-input__field {
        width: 100%;
        padding: 12px 16px;
        font-size: 12px;
        line-height: 12px;
        font-weight: 500;
        border: 2px solid var(--secondary-color);
        border-radius: 12px;
        transition: border-color 0.2s ease-in;
        outline: none;
        &::placeholder {
            color: var(--secondary-color);
        }
        &:hover,
        &:focus,
        &:not(:placeholder-shown) {
            border-color: darken(#acbccc, 10%);
        }
        @include media($bp-desktop-sm) {
            font-size: 16px;
            line-height: 16px;
        }
    }

    .base-input__icon {
        position: absolute;
        top: 50%;
        right: 15px;
        width: 20px;
        height: 20px;
        fill: var(--secondary-color);
        transform: translateY(-50%);
        cursor: pointer;
    }
</style>
