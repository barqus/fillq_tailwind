import axios from 'axios'

const fetchDataCall = async ({ api }) => {
    let apiReturn = await axios
        .get('https://fillq-333518.appspot.com/api/v1/'+api)
        .then(async function (response) {
            return response;
        })
        .catch(function (error) {
            console.log(error);
        });
    return apiReturn;
};

export default fetchDataCall