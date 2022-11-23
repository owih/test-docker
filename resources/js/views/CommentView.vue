<template>
    <DefaultLayout>
        <div class="center">
            <CommentsList />
        </div>
    </DefaultLayout>
</template>
<script>
import CommentsList from '../components/CommentsList'
import DefaultLayout from "../layouts/DefaultLayout";
const default_layout = "default";

export default {
    data() {
        return {
            message:'Hello Worzxczs  ld123'
        }
    },
    components: {
        CommentsList,
        DefaultLayout,
    }
};
</script>
