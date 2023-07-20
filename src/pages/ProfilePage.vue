<template>
  <div class="container-fluid" v-if="profile">
    <div class="row justify-content-center">
      <div class="col-md-10 col-12 profileCover">
        <!-- <img :src="profile.coverImg" alt=""> -->
      </div>
      <div class="col-md-10 col-12 profileInfo">
        <div>
          <img class="profileImg" :src="profile.picture" alt="">
        </div>
        <div class="mx-3">
          <h1>{{ profile.name }}</h1>
          <p>{{ profile.bio }}</p>
          <a v-if="profile.linkedin" :href="profile.linkedin"><i class="mdi mdi-linkedin fs-1"></i></a>
        </div>
      </div>
    </div>

    <div class="row mt-4">
      <!-- {{ profileProjects }} -->

      <div class="col-md-3 col-12" v-for="project in profileProjects" :key="project.id">
        <!--         v: name of prop v: data being passed down -->
        <ProjectCard :project="project" />
      </div>
    </div>
  </div>

  <div class="container-fluid" v-else>
    <div class="row">
      <div class="col-12">
        <h1>Loading <i class="mdi mdi-loading mdi-spin"></i> <i class="mdi mdi-rodent mdi-spin"></i></h1>
      </div>
    </div>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import {profilesService} from '../services/ProfilesService.js'
import { useRoute } from 'vue-router';
import { logger } from '../utils/Logger.js';
import { projectsService } from '../services/ProjectsService.js';

export default {
  setup(){

    // NOTE we need a way to access the router.js so we bring in useRoute()
    const route = useRoute()


    async function getProfile(){
      try {
        // NOTE the route params will tell us the id of the profile we are on, we are getting this from the vue router
        const profileId = route.params.profileId
        // logger.log('route', route)
        await profilesService.getProfile(profileId)
      } catch (error) {
        // @ts-ignore 
        Pop.error(error.message)
      }
    }

    async function getProfileProjects(){
      try {
        // NOTE takes in the param so that we only get projects related to this profileId
        const profileId = route.params.profileId
        await projectsService.getProfileProjects(profileId)
      } catch (error) {
        // @ts-ignore 
        Pop.error(error.message)
      }
    }

    onMounted(() => {
      getProfile()
      getProfileProjects()
    })

  return { 
    profile: computed(() => AppState.activeProfile),
    profileProjects: computed(() => AppState.projects),

    // NOTE to make the coverImg the background we can compute it in so that it is accessible in our CSS
    coverImg: computed(() => `url(${AppState.activeProfile?.coverImg})`)
  }
  }
};
</script>


<style lang="scss" scoped>
.profileImg{
  height: 20vh;
  width: 20vh;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}

.profileInfo{
  width: 60%;
  display: flex;
}

.profileCover{
  height: 30vh;
  // NOTE we are using the v-bind to access the computed coverImg property
  background-image: v-bind(coverImg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>