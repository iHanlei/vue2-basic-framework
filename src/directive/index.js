import Vue from 'vue'
import store from "@/store";

// 验权
const auth = {
  inserted(el, binding) {
    const perms = store.getters.userInfo.permissionList;
    if (perms.length > 0) {
      const v = perms.includes(binding.value);
      if (!v) {
        el.parentNode.removeChild(el);
      }
    }
  },
};

// 滑动到指定区域显示动画
const animate = {
  inserted(el, binding) {
    binding.addClass = () => {
      const { top } = el.getBoundingClientRect();
      const h = document.documentElement.clientHeight || document.body.clientHeight;
      if (top < h) {
        if (el.className.indexOf(binding.value) == -1) {
          el.className = binding.value + " " + el.className;
        }
        if (binding.addClass) {
          window.removeEventListener("scroll", binding.addClass);
        }
      }
    };
    window.addEventListener("scroll", binding.addClass, true);
    binding.addClass();
  },
  unbind: function(el, binding) {
    if (binding.addClass) {
      window.removeEventListener("scroll", binding.addClass);
    }
  },
};

Vue.directive("auth", auth);
Vue.directive("animate", animate);

export default { auth, animate };
