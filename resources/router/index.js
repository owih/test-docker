import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import CommentsListView from "../js/views/CommentsListView";
import CommentView from "../js/views/CommentView";

const routes = [
    { path: '/', name: 'home', component: CommentsListView },
    { path: '/comment/:id', name: 'comment', component: CommentView },
]

export const router = new VueRouter({
    routes,
    mode: "history",
});
