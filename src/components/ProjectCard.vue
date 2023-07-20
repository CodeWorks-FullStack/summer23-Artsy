<template>
    <div class="card mb-2">
      <img class="img-fluid" :src="project.coverImg" alt="">
      <div class="d-flex align-items-center justify-content-between p-2">
        <h3>{{ project.title }}</h3>
        <router-link :to="{name: 'Profile', params: {profileId: project.creatorId}}">
          <img class="img-fluid avatar" :src="project.creator.picture" :alt="project.creator.name" :title="project.creator.name">
        </router-link>
      </div>
      <div class="p-2">
        <button class="btn btn-warning w-50" data-bs-toggle="modal" data-bs-target="#projectModal" @click="setActiveProject()">See Project</button>
      </div>
    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { Project } from '../models/Project.js';
import { projectsService } from '../services/ProjectsService.js';
export default {

  props: {
    project: {type: Project, required: true}
  },

  setup(props){
  return { 
    setActiveProject(){
      projectsService.setActiveProject(props.project)
    }

  }
  }
};
</script>


<style lang="scss" scoped>
.avatar{
  height: 10vh;
  width: 10vh;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}
</style>