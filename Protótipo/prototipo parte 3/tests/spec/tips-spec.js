describe("Ativar/Desativar dicas", function () {

    it("Desativa dicas", function () {
        localStorage.setItem("enableTips", true)
        manageTips();

        expect(localStorage.getItem("enableTips")).toEqual("false");
    });

    it("Ativa dicas", function () {
        localStorage.setItem("enableTips", false)
        manageTips();

        expect(localStorage.getItem("enableTips")).toEqual("true");
    });
});









































function manageTips()
{
    if (localStorage.enableTips === "true")
    {
        localStorage.setItem("enableTips", false);
    }
    else {
        localStorage.setItem("enableTips", true);
    }
}