<template>
  <div class="container-fluid">
    <div class="row" >
      <div class="col-md-3 col-12" v-for="project in projects" :key="project.id">
        <!-- STUB Project Card Component -->
        <ProjectCard :project="project" />

        <!-- <div class="card mb-2">
          <img class="img-fluid" :src="project.coverImg" alt="">
          <div class="d-flex align-items-center justify-content-between p-2">
            <h3>{{ project.title }}</h3>
            <router-link :to="{name: 'Profile', params: {profileId: project.creatorId}}">
              <img class="img-fluid avatar" :src="project.creator.picture" :alt="project.creator.name" :title="project.creator.name">
            </router-link>
          </div>
          <div class="p-2">
            <button class="btn btn-warning w-50">See Project</button>
          </div>
        </div> -->
      </div>
    </div>
  </div>

</template>

<script>
import Pop from '../utils/Pop.js';
import {projectsService} from '../services/ProjectsService.js'
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js';

export default {
  setup() {

    async function getProjects(){
      try {
        await projectsService.getProjects()
      } catch (error) {
        // @ts-ignore 
        Pop.error(('[ERROR]'), error.message)
      }
    }

    onMounted(() => {
      getProjects()
    })

    return {
      projects: computed(() => AppState.projects)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
