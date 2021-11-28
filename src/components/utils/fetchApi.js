import axios from 'axios'

const fetchDataCall = async ({ api }) => {
    const token = "ya29.a0ARrdaM8JiGts1qxlF0c1ktmHY07FT1TJ-Hqen5E6OLCGammK53bbHwNg3Xn6wzCBOOvecR2CvzS7aAdeKpKSGsjNA2huRy4sPIlr_gCe9WkgrSUz5PVRRGNU5SOVcKBxWVvkmPthevtys9pPcjbhXJR7Btv8VvG0-9X_KcPWJlzQa0BRxpwCNguvHzcoQjJqLAoPamp4uqasWra0LWboAjEOA0wWMZoM4A"
    let apiReturn = await axios
        .get('https://8080-265f63c4-b237-4a37-a931-06899ce61dd0.cs-europe-west4-bhnf.cloudshell.dev/api/v1/'+api, {headers: { Authorization: `Bearer ${token}` }})
        .then(async function (response) {
            return response;
        })
        .catch(function (error) {
            console.log(error);
        });
    return apiReturn;
};

export default fetchDataCall