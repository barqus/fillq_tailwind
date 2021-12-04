import axios from 'axios'

const fetchDataCall = async ({ api }) => {
    let apiReturn = await axios
        .get('https://fillq-333518.appspot.com/api/v1/' + api)
        .then(async function (response) {
            console.log("RESPONSE", response.data[0].tier)
            var tierOrdering = {},
                tierOrder = ['CHALLENGER', 'GRANDMASTER', 'MASTER', 'DIAMOND', 'PLATINUM', 'GOLD', 'SILVER', 'BRONZE', 'IRON'];
            for (var i = 0; i < tierOrder.length; i++)
                tierOrdering[tierOrder[i]] = i;

            var rankOrdering = {},
                rankOrder = ['I', 'II', 'III', 'IV'];
            for (i = 0; i < rankOrder.length; i++)
                rankOrdering[rankOrder[i]] = i;

            response.data = response.data.sort(function (a, b) {
                return tierOrdering[a.tier] - tierOrdering[b.tier] || rankOrdering[a.rank] - rankOrdering[b.rank] || b.points - a.points || Math.floor(a.wins/(a.wins+a.losses)) - Math.floor(b.wins/(b.wins+b.losses));
            });


            return response;
        })
        .catch(function (error) {
            console.log(error);
        });
    return apiReturn;
};

export default fetchDataCall