<template>
  <div>
    <Sidebar />
    <div class="main">
      <PageTop />
      <div class="autopagerize_page_element">
        <div class="content bg-white dark:bg-dark">
          <PostEntry />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PageTop from "@/components/PageTop.vue";
import Sidebar from "@/components/Sidebar.vue";
import PostEntry from "@/components/PostEntry.vue";
export default {
  name: "Index",
  components: {
    PageTop,
    Sidebar,
    PostEntry
  }
};
</script>