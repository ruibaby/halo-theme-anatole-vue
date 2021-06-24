<template>
  <div>
    <div
      v-for="(post, index) in list.data"
      class="post animated fadeInDown bg-white dark:bg-dark"
      :key="index"
    >
      <div class="post-title">
        <h3>
          <a
            class="text-black dark:text-darkText"
            href="javascript:void(0);"
            @click="handleViewDetail(post.id)"
            >{{ post.title }}</a
          >
        </h3>
      </div>
      <div class="post-content">
        <div class="p_part dark:text-darkText">
          <p>{{ post.summary }}...</p>
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
    <div class="pagination dark:border-black" v-if="!list.loading">
      <ul class="clearfix">
        <li class="pre pagbuttons" v-if="list.hasPrevious">
          <a
            @click="handlePrevPage()"
            class="btn"
            role="navigation"
            href="javascript:void(0);"
            >上一页</a
          >
        </li>
        <li class="next pagbuttons" v-if="list.hasNext">
          <a
            @click="handleNextPage()"
            class="btn"
            role="navigation"
            href="javascript:void(0);"
            >下一页</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "PostEntry",
  data() {
    return {
      list: {
        data: [],
        params: {
          page: 0,
          size: 10,
        },
        loading: false,
        hasPrevious: false,
        hasNext: false,
      },
    };
  },
  created() {
    this.handleListPosts();
  },
  methods: {
    handleListPosts() {
      this.list.loading = true;
      this.list.data = [];
      this.$apiClient.post
        .list(this.list.params)
        .then((response) => {
          this.list.data = response.data.content;
          this.list.params.page = response.data.page;
          this.list.hasPrevious = response.data.hasPrevious;
          this.list.hasNext = response.data.hasNext;
        })
        .finally(() => {
          this.list.loading = false;
        });
    },
    handleNextPage() {
      this.list.params.page++;
      this.handleListPosts();
    },
    handlePrevPage() {
      this.list.params.page--;
      this.handleListPosts();
    },
    handleViewDetail(id) {
      this.$router.push({ name: "Post", query: { id: id } });
    },
  },
};
</script>
