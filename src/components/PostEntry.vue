<template>
  <div>
    <div
      v-for="(post,index) in posts.content"
      class="post animated fadeInDown bg-white dark:bg-dark"
      :key="index"
    >
      <div class="post-title">
        <h3>
          <a
            class="text-black dark:text-darkText"
            href="javascript:void(0);"
            @click="handleViewDetail(post.id)"
          >{{ post.title }}</a>
        </h3>
      </div>
      <div class="post-content">
        <div class="p_part dark:text-darkText">
          <p>{{post.summary}}...</p>
        </div>
        <div class="p_part">
          <p></p>
        </div>
      </div>
      <div class="post-footer">
        <div class="meta">
          <div class="info">
            <i class="ri-time-line"></i>
            <span class="date">{{ post.createTime | moment }}</span>
            <i class="ri-message-2-line"></i>
            <a href="${post.fullPath!}#comment_widget">Comments</a>
          </div>
        </div>
      </div>
    </div>
    <div
      class="pagination dark:border-black"
      v-if="!loading"
    >
      <ul class="clearfix">
        <li
          class="pre pagbuttons"
          v-if="posts.hasPrevious"
        >
          <a
            @click="handlePrevPage()"
            class="btn"
            role="navigation"
            href="javascript:void(0);"
          >上一页</a>
        </li>
        <li
          class="next pagbuttons"
          v-if="posts.hasNext"
        >
          <a
            @click="handleNextPage()"
            class="btn"
            role="navigation"
            href="javascript:void(0);"
          >下一页</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import postApi from "@/api/post.js";
export default {
  name: "PostEntry",
  data() {
    return {
      posts: {},
      loading: false
    };
  },
  created() {
    this.handleListPosts();
  },
  methods: {
    handleListPosts() {
      const _this = this;
      _this.loading = true;
      _this.posts.content = [];
      postApi
        .list({
          page: _this.posts.page
        })
        .then(response => {
          _this.posts = response.data.data;
        })
        .finally(() => {
          setTimeout(() => {
            _this.loading = false;
          }, 300);
        });
    },
    handleNextPage() {
      this.posts.page++;
      this.handleListPosts();
    },
    handlePrevPage() {
      this.posts.page--;
      this.handleListPosts();
    },
    handleViewDetail(id) {
      this.$router.push({ name: "Post", query: { id: id } });
    }
  }
};
</script>