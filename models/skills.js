const skills = [
    { id: '12', description: 'basketball', season: 'fall' },
    { id: '13', description: 'soccer', season: 'fall' },
    { id: '14', description: 'baseball', season: 'summer' },
    { id: '15', description: 'track and field', season: 'spring' },
    { id: '16', description: 'wrestling', season: 'winter' }
];

module.exports = {
    create,
    update,
    remove,
    get
};

//instructions said models/skill, but renamed to models/skills
function create (skill) {
    //skills.push({id, description, season})
    skills.push(skill)
}

function update (id, description, season) {
    skills[id].description = description
    skills[id].season = season
}

function remove(id) {
    delete skills[id]
}

function get(id) {
    return skills[id]
}

