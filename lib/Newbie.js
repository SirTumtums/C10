const Subordinate = require('./subordinate')
class Newbie extends Subordinate {
    constructor (name, id, email, school){
        super(name, id, email)

        this.school = school
    }
    getSchool(){
        return this.school
    }
    getRole(){
        return 'Newbie'
    }
}

module.exports = Newbie