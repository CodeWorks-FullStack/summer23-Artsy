

export class Project {
  constructor(data) {
    this.id = data.id
    this.title = data.title
    this.coverImg = data.coverImg
    this.projectImgs = data.projectImgs
    this.creatorId = data.creatorId
    this.creator = data.creator

  }
}


// let project = {
//   "_id": "6478ce015bdd4f203d49d3f1",
//   "title": "Fat Cats",
//   "coverImg": "https://images.unsplash.com/photo-1518365971303-fbb2d838ff37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGZhdCUyMGNhdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
//   "creatorId": "6478cbb3331a5f705571bb48",
//   "projectImgs": [
//     "https://images.unsplash.com/photo-1671468158308-e0ea743c46de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
//     "https://www.inquirer.com/resizer/yMCs3mgc-4b3hxAMeaho6H8BVbw=/760x507/smart/filters:format(webp)/arc-anglerfish-arc2-prod-pmn.s3.amazonaws.com/public/J4QDHA4WPZHJJJKAUWMI6HGL6A.jpg",
//     "https://images.unsplash.com/photo-1560794081-cb99dfca74ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80",
//     "https://images.unsplash.com/photo-1655656724704-59c4021ee726?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
//   ],
//   "createdAt": "2023-06-01T16:57:37.584Z",
//   "updatedAt": "2023-06-01T16:57:37.584Z",
//   "__v": 0,
//   "creator": {
//     "_id": "6478cbb3331a5f705571bb48",
//     "subs": [
//       "auth0|6478cbb2b7502c0607bd178a"
//     ],
//     "email": "jean@crabapple.org",
//     "name": "jean",
//     "picture": "https://s.gravatar.com/avatar/61aabca557fb0917a1f7eaceec710984?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fje.png",
//     "bio": "",
//     "coverImg": "https://images.unsplash.com/photo-1586829135343-132950070391?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
//     "github": "",
//     "linkedin": "",
//     "resume": "",
//     "class": "",
//     "graduated": false,
//     "createdAt": "2023-06-01T16:47:50.953Z",
//     "updatedAt": "2023-06-01T16:47:50.953Z",
//     "__v": 0,
//     "id": "6478cbb3331a5f705571bb48"
//   },
//   "id": "6478ce015bdd4f203d49d3f1"
// }