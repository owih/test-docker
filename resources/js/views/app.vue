<template>
    <DefaultLayout>
        <router-view></router-view>
    </DefaultLayout>
</template>
<script>
import DefaultLayout from "../layouts/DefaultLayout";
const default_layout = "default";

export default {
    components: {
        DefaultLayout,
    }
};
</script>
<style lang="scss">
#app {
    font-size: 18px;
    * {
        box-sizing: border-box;
    }
}
</style>
