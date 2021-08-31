describe("Validação de banco de dados", function () {
    
    describe("Verificar se a info está no banco", function () {

        it("Adicionar o score", function () {
            localStorage.setItem("score", 2)
            var exist = existOnDB("score");

            expect(exist).toEqual(true);
        });     
        
        it("Remove o score", function () {
            localStorage.removeItem("score")
            var exist = existOnDB("score");

            expect(exist).toEqual(false);
        });  

        it("Não adiciona nada", function () {
            var exist = existOnDB("score");

            expect(exist).toEqual(false);
        });  
    });
});






































function existOnDB(name) {
    if(localStorage.getItem(name))
    {
        return true;
    }

    return false;
}