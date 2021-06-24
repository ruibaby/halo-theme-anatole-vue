import Vue from "vue";
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");

Vue.filter("moment", function(dataStr, pattern = "YYYY-MM-DD HH:mm") {
  return moment(dataStr).format(pattern);
});
