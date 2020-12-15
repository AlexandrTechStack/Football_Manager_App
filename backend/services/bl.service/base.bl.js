class BaseBl {

    constructor(repository) {
        this.repository = repository
    }

    GetMethod = () => {
        this.repository.getAllItem()
    }
    GetByIdMethod = () => {
        this.repository.getByIdItem()
    }
    PostMethod = () => {
        this.repository.postItem()
    }
    UpdateMethod = () => {
        this.repository.updateItem()
    }
    DeleteMethod = () => {
        this.repository.deleteItem()
    }
}
module.exports = BaseBl