import axios from 'axios'

const fetchDataCall = async ({ api }) => {
    const token = "ya29.a0ARrdaM8JiGts1qxlF0c1ktmHY07FT1TJ-Hqen5E6OLCGammK53bbHwNg3Xn6wzCBOOvecR2CvzS7aAdeKpKSGsjNA2huRy4sPIlr_gCe9WkgrSUz5PVRRGNU5SOVcKBxWVvkmPthevtys9pPcjbhXJR7Btv8VvG0-9X_KcPWJlzQa0BRxpwCNguvHzcoQjJqLAoPamp4uqasWra0LWboAjEOA0wWMZoM4A"
    let apiReturn = await axios
        .get('http://157.230.125.219/api/v1/'+api)
        .then(async function (response) {
            return response;
        })
        .catch(function (error) {
            console.log(error);
        });
    return apiReturn;
};

export default fetchDataCall