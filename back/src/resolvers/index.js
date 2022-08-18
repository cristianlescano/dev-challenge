const Vuelos = require("../models/vuelos")

module.exports = {
  vuelos: async args => {
    const { priceMin,priceMax, page=0, limit=10 } = args
    try {
      const postsFetched = await Vuelos.find( {
        price: {
          $gt: priceMin,
          $lt: priceMax
        }
      },{}, { skip: (page*limit), limit: limit} ).sort({"price":1})
      postsFetched.map(post => {
        return {
          ...post._doc,
          _id: post.id
        }
      })
      console.log(postsFetched)
      return {page: page,detail:postsFetched}
    } catch (error) {
      throw error
    }
  },

  vuelo: async (_id) => {
    try {
      const postFetched = await Vuelos.findById(_id);
      console.log(postFetched)
      return {
        ...postFetched._doc,
        _id: postFetched.id,
      }
    } catch (error) {
      throw error
    }
  },
}