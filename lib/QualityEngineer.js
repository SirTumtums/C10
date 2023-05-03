const Subordinate = require('./subordinate')
class QualityEngineer extends Subordinate {
    constructor (name, id, email, username){
        super(name, id, email)

        this.username = username
    }
    getGithub(){
        return this.username
    }
    getRole(){
        return 'Quality Engineer'
    }
}

module.exports = QualityEngineer