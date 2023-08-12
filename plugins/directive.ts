import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive("click-outside", {
        mounted(element, binding) {
            element.clickOutsideEvent = function (event) {
                if (!(element === event.target || element.contains(event.target))) {
                    binding.value(event, element);
                }
            };
            document.body.addEventListener("click", element.clickOutsideEvent);
        },
        unmounted(element) {
            document.body.removeEventListener("click", element.clickOutsideEvent);
        },
    });
});
