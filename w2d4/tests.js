describe("filter", function () {
    it("takes numbers of array and return sum of array",
        function () {
            let bannedWords = ['not', 'bad', 'bitch'];
            assert.equal("This house is nice, it is okay!", filter("This house is not nice, it is bad okay!", bannedWords));
        });
});

describe("bubbleSort", function () {
    it("takes numbers of array and return sorted array",
        function () {
            let arr = [6, 4, 0, 3, -2, 1];
            assert.deepEqual([-2, 0, 1, 3, 4, 6], bubbleSort(arr));
        });
});