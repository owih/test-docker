<template>
    <div class="container">
        <section class="section">
            <FilterPanel />
        </section>
        <section class="section">
            <CommentsList />
        </section>
        <section class="section">
            <CreateForm />
        </section>
    </div>
</template>
<script>
import CommentsList from '../components/CommentsList'
import CreateForm from "../components/CreateForm";
import FilterPanel from "../components/FilterPanel";
const default_layout = "default";

export default {
    components: {
        CommentsList,
        CreateForm,
        FilterPanel,
    }
};
</script>
<style scoped lang="scss">
.section {
    &:not(:last-child) {
        padding-bottom: 32px;
    }
}
</style>
