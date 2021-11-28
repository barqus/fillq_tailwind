import axios from 'axios'

const fetchDataCall = async ({ api }) => {
    let apiReturn = await axios
        .get('http://3.123.229.48:8080/api/v1/'+api)
        .then(async function (response) {
            return response;
        })
        .catch(function (error) {
            console.log(error);
        });
    return apiReturn;
};

export default fetchDataCall