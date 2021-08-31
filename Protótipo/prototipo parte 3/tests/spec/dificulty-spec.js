describe("Dicas", function () {
    
    describe("Dicas fáceis", function () {
        it("facil", function () {
            var testeFacil = getDicas(1);

            expect(testeFacil).toEqual(5);
        });
    });

    describe("Dicas Médias", function () {
        it("medio", function () {
            var testeMedio = getDicas(2);

            expect(testeMedio).toEqual(3);
        });
    });

    describe("Dicas Difíceis", function () {
        it("dificil", function () {
            var testeDificil = getDicas(3);

            expect(testeDificil).toEqual(1);
        });
    });
});



















































function getDicas(number)
{
    if(number === 1)
        return 5;
    else if(number === 2)
        return 3;
    else
        return 1;
}