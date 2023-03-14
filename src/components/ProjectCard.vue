<script>
export default {
  props: { project: Object },
  data() {
    return {
      baseUrl: "http://127.0.0.1:8000",
    };
  },
};
</script>
<template lang="">
  <div class="card m-3">
    <img
      class="card-img-top"
      :src="
        project.cover_image != null
          ? `${this.baseUrl}/storage/${project.cover_image}`
          : 'https://picsum.photos/200/300'
      "
      alt="Card image cap"
    />
    <div class="card-body">
      <h5 class="card-title">{{ project.title }}</h5>
      <p class="card-text">{{ project.content }}</p>
      <div>
        <router-link :to="{ name: 'single-project', params: { slug: project.slug }}" class="btn btn-primary">
          visualizza progetto 
        </router-link>
      </div>
    </div>
  </div>
</template>
<style lang=""></style>
