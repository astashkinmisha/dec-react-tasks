import {axiosService} from "./axios.service";
import {urls} from "../constants";

const usersService = {
    getUsers: () => axiosService.get(urls.users),
    getUser: (id) => axiosService(`${urls.users}/${id}`),
    getPostsOfUser: (id) => axiosService.get(`${urls.users}/${id}${urls.posts}`)
}

export {usersService}