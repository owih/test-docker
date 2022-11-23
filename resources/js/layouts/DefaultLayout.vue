<template>
    <div class="wrapper">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "DefaultLayout"
}
</script>

<style scoped lang="scss">
.wrapper {
    .container {
        max-width: 576px;
        padding: 16px;
        margin: 0 auto;
        @media (min-width: 576px) {
            max-width: 576px;
        }
        @media (min-width: 768px) {
            max-width: 768px;
        }
        @media (min-width: 992px) {
            max-width: 992px;
        }
        @media (min-width: 992px) {
            max-width: 1200px;
        }
    }
}
</style>
