<template>
  <div class="page-top animated fadeInDown bg-white dark:bg-dark dark:border-black">
    <div class="nav">
      <li>
        <router-link
          class="text-black dark:text-darkLink"
          :to="{name: 'Index'}"
        >首页</router-link>
      </li>
    </div>
    <div class="information">
      <div class="avatar">
        <img :src="user.avatar" />
      </div>
    </div>
  </div>
</template>
<script>
import userApi from "@/api/user.js";
export default {
  name: "PageTop",
  data() {
    return {
      user: {}
    };
  },
  created() {
    this.handleGetProfile();
  },
  methods: {
    handleGetProfile() {
      userApi.getProfile().then(response => {
        this.user = response.data.data;
      });
    }
  }
};
</script>