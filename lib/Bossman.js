const Subordinate = require('./subordinate')
class BossMan extends Subordinate {
    constructor (name, id, email, officeNumber){
        super(name, id, email)

        this.officeNumber = officeNumber
    }
    getOfficeNumber(){
        return this.officeNumber
    }
    getRole(){
        return 'BossMan'
    }
}

module.exports = BossMan