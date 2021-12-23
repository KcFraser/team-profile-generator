class Manager {
    constructor (id, name, officeNumber, email){
        super(id, name, email)
        this.officeNumber = officeNumber
    }
    getRole(){
        return "Manager"
    } 
    getOfficeNumber() {
        return this.officeNumber
    }
}

module.exports = Manager;