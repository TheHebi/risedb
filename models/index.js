const Monster = require("./Monster")
const Part = require("./Part")
const Rank = require("./Rank")

Monster.hasMany(Part)
Part.belongsTo(Monster)

Rank.hasMany(Part)
Part.belongsTo(Rank)

module.exports = {
    Monster,
    Part,
    Rank
}