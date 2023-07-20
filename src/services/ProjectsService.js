import { AppState } from "../AppState.js"
import { Project } from "../models/Project.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"


class ProjectsService {

  async getProjects() {
    const res = await api.get('api/projects')
    logger.log('[GETTING PROJECTS]', res.data)
    const projects = res.data.map(p => new Project(p))
    AppState.projects = projects
  }

  async getProfileProjects(profileId) {
    // const res = await api.get(`api/projects?creatorId=${profileId}`)

    // NOTE writing in the params like this allows us to pass more query params if we need to
    const res = await api.get('api/projects', {
      params: {
        creatorId: profileId,
        // stuff: 'wut'
      }
    })

    logger.log('[GETTING PROFILE POSTS]', res.data)

    const profileProjects = res.data.map(p => new Project(p))
    AppState.projects = profileProjects

  }

  setActiveProject(project) {
    AppState.activeProject = project
  }

}



export const projectsService = new ProjectsService()