describe("PageHistoryImpl", function() {
    describe("History", function() {
        beforeEach(function() {
            this.pageHistory = new PageHistoryImpl(jasmine.createSpyObj('CustomDataAttributes', ['setOnClickEvent']));
        });
        it("push should set content", function() {
            this.pageHistory.push("test2");
            expect(this.pageHistory.html[0]).toEqual("test2");
        });
        it("pop should get content", function() {
            this.pageHistory.index = 0;
            this.pageHistory.html[0] = "test";
            expect(this.pageHistory.pop()).toEqual("test");
        });
        it("load should load pushed content into container", function() {
            this.pageHistory.index = 0;
            this.pageHistory.html[0] = "test";
            setFixtures("<div id='testct'></div>");
            this.pageHistory.load();

        });
    });
    describe("CirclePushLib with maxEntryLimit of 20", function() {
        describe("getNextIndex", function() {
            beforeEach(function() {
                this.pageHistory = new PageHistoryImpl();
            });
            it("should return 5 if index is 4", function() {
                this.pageHistory.index = 4;
                expect(this.pageHistory.circlePushGetNextIndex()).toEqual(5);
            });
            it("should return 20 if index is 19", function() {
                this.pageHistory.index = 19;
                expect(this.pageHistory.circlePushGetNextIndex()).toEqual(20);
            });
            it("should return 0 if index is 20", function() {
                this.pageHistory.index = 20;
                expect(this.pageHistory.circlePushGetNextIndex()).toEqual(0);
            });
        });
        describe("getBeforeIndex", function() {
            beforeEach(function() {
                this.pageHistory = new PageHistoryImpl();
            });
            it("should return 6 if index is 6 and set index to 5", function() {
                this.pageHistory.index = 6;
                var val = this.pageHistory.circlePushGetBeforeIndex();
                expect(val).toEqual(6);
                expect(this.pageHistory.index).toEqual(5);
            });
            it("should return 0 if index is 0 and set index to 20", function() {
                this.pageHistory.index = 0;
                expect(this.pageHistory.circlePushGetBeforeIndex()).toEqual(0);
                expect(this.pageHistory.index).toEqual(20);
            });
            it("should return 2 if index is 2 and set index to 1", function() {
                this.pageHistory.index = 2;
                expect(this.pageHistory.circlePushGetBeforeIndex()).toEqual(2);
                expect(this.pageHistory.index).toEqual(1);
            });
        });
    });
});