

describe("sum", function () {
    it("takes numbers of array and return sum of array",
        function () {
            assert.equal(10, sum([1,2,3,4]));
        });
});

describe("multiply", function () {
    it("takes numbers of array and return multiply of array",
        function () {
            assert.equal(24, multiply([1,2,3,4]));
        });
});

describe("reverse", function () {
    it("takes string and return reverse of string",
        function () {
            assert.equal("edcba",reverse("abcde") );
        });
});

describe("filterLongWords", function(){
    it("it takes array of string and return array of words that are longer than i",
    function(){
        assert.deepEqual(['name', 'tegshjargal'],filterLongWords(['my', 'name', 'is', 'tegshjargal'], 3))
    });
});
