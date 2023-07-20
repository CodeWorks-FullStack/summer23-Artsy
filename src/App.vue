<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <!-- <footer class="bg-dark text-light">
    Made with 💖 by CodeWorks
  </footer> -->

  <!-- NOTE in order to access our modal on both the home page and the profile page we need to put it in the app -->
  <!-- NOTE we already have the activeProject so we can access those properties  -->

  <!-- Modal -->
<div class="modal fade" id="projectModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content" v-if="activeProject">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">{{ activeProject.title }}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="container-fluid">
          <div class="row">
            <!-- NOTE img is an array on the project object: we just need to v-for over that array in order to get the imgs on the screen THIS IS IMPORTANT*** -->
            <div class="col-12 mb-3" v-for="img in activeProject.projectImgs" :key="img">
              <!-- {{ activeProject.projectImgs }} -->
              <img class="img-fluid" :src="img" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
      </div>
    </div>
  </div>
</div>

</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState),
      activeProject: computed(() => AppState.activeProject)
    }
  },
  components: { Navbar }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root{
  --main-height: calc(100vh - 32px - 64px);
}


footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
