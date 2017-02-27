import axios from 'axios';
function getUserInfo( username){
    return axios.get(`https://api.github.com/users/${username}`);
}

function getUserRepos( username ){
    return axios.get(`https://api.github.com/users/${username}/repos`);
}

function getGithubInfo( username ){
    return axios.all([ getUserInfo(username), getUserRepos(username)])
        .then( arr => {
            let data = {
                userInfo: arr[0].data,
                userRepos: arr[1].data
            }
            return data;
        })
}

export default getGithubInfo;