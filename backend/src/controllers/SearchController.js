const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response){
        const {latitude, longitude, techs} = request.query;
        // Buscar todos os devs num raio de 10kms
        // filtar por techs

        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry:{
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    //$maxDistance: 10000,
                    $maxDistance: 100000000,
                },
            },
        });

        return response.json({ devs });

    }
}