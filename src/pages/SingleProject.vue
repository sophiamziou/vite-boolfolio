<script>
import axios from "axios";
import ProjectCard from "../components/ProjectCard.vue";
export default {
    components: {
        ProjectCard,
    },
    data() {
        return {
            project: [],
            loading: true,
            baseUrl: "http://127.0.0.1:8000",
        };
    },
    methods: {
        getSingleProject() {
            this.loading = true;
            axios.get(`${this.baseUrl}/api/projects/${this.$route.params.slug}`).then((response) => {
                if (response.data.success) {
                    this.project = response.data.project;
                    this.loading = false;
                } else {

                }
            });
        },
    },
    mounted() {
        this.getSingleProject();
    },
};
</script>
<template>
    <div class="container-fluid mx-3">
        <div class="row">
            <div class="col">
                <h2>{{ project.title }}</h2>
                <div v-if="loading">
                    <div class="loader my-4"></div>
                </div>
                <div v-else>
                    <ProjectCard :project="project"></ProjectCard>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>