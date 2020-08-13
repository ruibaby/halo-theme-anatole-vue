<template>
  <div>
    <Sidebar />
    <div class="main">
      <PageTop />
      <div class="autopagerize_page_element">
        <div class="content bg-white dark:bg-dark">
          <div class="post-page bg-white dark:bg-dark">
            <div class="post animated fadeInDown">
              <div class="post-title">
                <h3>
                  <a class="text-black dark:text-darkText">{{ post.title }}</a>
                </h3>
              </div>
              <div
                class="post-content dark:text-darkText"
                v-html="post.formatContent"
              >
              </div>
              <div class="post-footer">
                <div class="meta">
                  <div class="info">
                    <i class="ri-time-line"></i>
                    <span class="date">{{ post.createTime | moment }}</span>
                    <i class="fa fa-comment-o"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="share inline-flex">
              <div class="evernote">
                <a
                  href="javascript:(function(){EN_CLIP_HOST='http://www.evernote.com';try{var%20x=document.createElement('SCRIPT');x.type='text/javascript';x.src=EN_CLIP_HOST+'/public/bookmarkClipper.js?'+(new%20Date().getTime()/100000);document.getElementsByTagName('head')[0].appendChild(x);}catch(e){location.href=EN_CLIP_HOST+'/clip.action?url='+encodeURIComponent(location.href)+'&title='+encodeURIComponent(document.title);}})();"
                  ref="nofollow"
                  target="_blank"
                  class="fa fa-bookmark"
                ></a>
              </div>
              <div class="weibo">
                <a
                  href="javascript:void((function(s,d,e){try{}catch(e){}var f='http://service.weibo.com/share/share.php?',u=d.location.href,p=['url=',e(u),'&title=',e(d.title),'&appkey=2924220432'].join('');function a(){if(!window.open([f,p].join(''),'mb',['toolbar=0,status=0,resizable=1,width=620,height=450,left=',(s.width-620)/2,',top=',(s.height-450)/2].join('')))u.href=[f,p].join('');};if(/Firefox/.test(navigator.userAgent)){setTimeout(a,0)}else{a()}})(screen,document,encodeURIComponent));"
                  class="ri-weibo-fill"
                ></a>
              </div>
              <div class="twitter">
                <a
                  href="http://twitter.com/home?status=${post.fullPath!},${blog_title!},${post.title};"
                  class="fa fa-twitter"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import postApi from "@/api/post.js";
import PageTop from "@/components/PageTop.vue";
import Sidebar from "@/components/Sidebar.vue";
export default {
  name: "Post",
  components: {
    PageTop,
    Sidebar
  },
  data() {
    return {
      post: {}
    };
  },

  beforeRouteEnter(to, from, next) {
    // Get post id from query
    const id = to.query.id;
    next(vm => {
      if (id) {
        vm.handleGetPost(id);
      }
    });
  },
  methods: {
    handleGetPost(id) {
      postApi.get(id).then(response => {
        this.post = response.data.data;
      });
    }
  }
};
</script>