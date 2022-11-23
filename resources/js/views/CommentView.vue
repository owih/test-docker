<template>
    <div class="container">
        <section class="section">
                <CommentFull />
        </section>
    </div>
</template>
<script>
import CommentFull from "../components/CommentFull";
const default_layout = "default";

export default {
    components: {
        CommentFull,
    }
};
</script>
