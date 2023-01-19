<template>
    <app-layout>
        tienda
    </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout.vue";

export default {
    components: {AppLayout},
    data: () => ({
        loading: false,
        selection: 1
    }),

    methods: {
        reserve() {
            this.loading = true;

            setTimeout(() => (this.loading = false), 2000);
        }
    }
};
</script>

<style scoped></style>
