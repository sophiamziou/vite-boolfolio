<script>
import axios from "axios";
export default {
  name: "ProjectMain",
  data() {
    return {
      projects: [],
      loading: true,
      baseUrl: "http://127.0.0.1:8000",
    };
  },
  methods: {
    getProjects() {
      this.loading = true;
      axios.get(`${this.baseUrl}/api/projects`).then((response) => {
        if (response.data.success) {
          this.projects = response.data.results;
          this.loading = false;
        } else {
          //altro codice
        }
      });
    },
  },
  mounted() {
    this.getProjects();
  },
};
</script>
<template>
  <div class="container-fluid mx-3">
    <div class="row">
      <div class="col-12">
        <h1 class="m-2">BOOLFOLIO</h1>
      </div>
      <div class="col">
        <div v-if="loading">
          <div class="loader my-4"></div>
        </div>
        <div v-else class="d-flex flex-wrap justify-content-center">
          <div class="card m-3" :key="project.id" v-for="project in projects">
            <img
              class="card-img-top"
              :src="
                project.cover_image != null
                  ? project.cover_image
                  : 'https://picsum.photos/200/300'
              "
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">{{ project.title }}</h5>
              <p class="card-text">{{ project.content }}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.card {
  width: 300px;
}
.loader {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
