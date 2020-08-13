<template>
  <div class="sidebar animated fadeInDown bg-white dark:bg-dark dark:border-black">
    <div class="logo-title">
      <div class="title">
        <img
          :src="user.avatar"
          style="width:127px;"
          class="rounded-full mb-6"
        />
        <h3 class="text-gray-600 dark:text-darkText">
          <a
            href="/"
            class="text-black dark:text-darkText"
          >{{ user.nickname }}</a>
        </h3>
        <div class="description">
          <p class="dark:text-darkText">{{ user.description }}</p>
        </div>
      </div>
    </div>
    <!-- <#include "social-list.ftl">
      <div class="footer">
        <a
          target="_blank"
          href="#"
        >
          <div class="footer_text">
            <@global.footer_info />
          </div>
        </a>
      </div> -->
  </div>

</template>
<script>
import userApi from "@/api/user.js";
export default {
  name: "Sidebar",
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