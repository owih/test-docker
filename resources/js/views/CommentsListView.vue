<template>
    <div class="center">
        <CommentsList />
    </div>
</template>
<script>
import CommentsList from '../components/CommentsList'
const default_layout = "default";

export default {
    components: {
        CommentsList,
    }
};
</script>
