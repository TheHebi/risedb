const Monster = require("./Monster")
const Part = require("./Part")

Monster.hasMany(Part)
Part.belongsTo(Monster)

module.exports = {
    Monster,
    Part
}