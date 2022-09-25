<template>
  <div class="home-container">
    <van-nav-bar title="标题" fixed />
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <Article
          v-for="item in list"
          :key="item.id"
          :title="item.title"
          :author="item.aut_name"
          :cmt-count="item.comm_count"
          :time="item.pubdate"
          :cover="item.cover"
        ></Article>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getArticleAPI } from "@/api/getArticleAPI.js";
import Article from "@/components/article/Article.vue";

export default {
  components: {
    Article,
  },
  data() {
    return {
      page: 1,
      limit: 10,
      list: [],
      loading: true,
      finished: false,
      isLoading: false,
    };
  },
  created() {
    this.getArticle();
  },
  methods: {
    async getArticle(isRefresh) {
      const { data: res } = await getArticleAPI(this.page, this.limit);
      console.log(res);
      if (isRefresh === true) {
        this.list = [...res, ...this.list];
        this.isLoading = false;
      } else {
        this.list = [...this.list, ...res];
        this.loading = false;
      }

      if (res.length === 0) {
        this.finished = true;
      }
    },
    onLoad() {
      this.page++;
      this.getArticle();
    },
    onRefresh() {
      this.page++;
      this.getArticle(true);
    },
  },
};
</script>
</style>