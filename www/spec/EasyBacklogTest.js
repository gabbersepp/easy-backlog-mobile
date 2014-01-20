describe("Easybacklog", function() {
	if(typeof conf_apiKey !== "undefined") {
		describe("Test real Easybacklog API", function() {
			var easyBacklog;
			
			beforeEach(function() {
				this.easyBacklog = new EasyBacklogControllerImpl(new EasyBacklogImpl("https://easybacklog.com/api", conf_apiKey));
			});
			
			it("login with api key should success", function() {
				var ready = false, success = false, cSuccess = function(data) {success = true; ready = true;}, cFail = function(data) {success = false; ready = true;};
				runs(function() {
					this.easyBacklog.loginCheck(cFail, cSuccess);
				});
				waitsFor(function() {
					return ready;
				}, "authenticate", 5000);
				
				runs(function() {
					expect(success).toBeTruthy();
				});
			});
			
			it("login with wrong api key should fail", function() {
				this.easyBacklog = new EasyBacklogControllerImpl(new EasyBacklogImpl("https://easybacklog.com/api", conf_apiKey+"m"));
				var ready = false, success = false, cSuccess = function(data) {success = true; ready = true;}, cFail = function(data) {success = false; ready = true;};
				runs(function() {
					this.easyBacklog.loginCheck(cFail, cSuccess);
				});
				waitsFor(function() {
					return ready;
				}, "authenticate", 5000);
				
				runs(function() {
					expect(success).not.toBeTruthy();
				});
			});
		});
	}
	
	describe("Test fake Easybacklog API", function() {
		var eb, e;
		beforeEach(function() {
			this.eb = {
				call: function(destination, success, fail) {
					if(destination.match("accounts/[0-9]*/backlogs")) {
						success();
					}else if(destination.match("backlogs/[0-9]*/themes")) {
						success();
					}else if(destination.match("themes/[0-9]*/stories")) {
						success();
					}else if(destination.match("stories/[0-9]*")) {
						success();
					}else if(destination.match("backlogs/[0-9]*/sprints")) {
                        success();
                    }else{
                        console.log(destination);
                        fail();
                    }
				}
			};
		});
		
		it("Backlogs should be loaded", function() {
			map = {};
			map["easybacklogaccountId"] = 123;
			this.e = new EasyBacklogControllerImpl(this.eb, new ConfigMock(map));
			var ready = false, success = false, cSuccess = function(data) {success = true; ready = true;}, cFail = function(data) {success = false; ready = true;};
			runs(function() {
				this.e.getBacklogs(cFail, cSuccess);
			});
			waitsFor(function() {
				return ready;
			}, "authenticate", 5000);
			
			runs(function() {
				expect(success).toBeTruthy();
			});
		});
		
		it("Themes should be loaded", function() {
			map = {};
			map["easybacklogaccountId"] = 123;
			this.e = new EasyBacklogControllerImpl(this.eb, new ConfigMock(map));
			var ready = false, success = false, cSuccess = function(data) {success = true; ready = true;}, cFail = function(data) {success = false; ready = true;};
			runs(function() {
				this.e.getThemes(1, cFail, cSuccess);
			});
			waitsFor(function() {
				return ready;
			}, "authenticate", 5000);
			
			runs(function() {
				expect(success).toBeTruthy();
			});
		});
		
		it("Stories should be loaded", function() {
			map = {};
			map["easybacklogaccountId"] = 123;
			this.e = new EasyBacklogControllerImpl(this.eb, new ConfigMock(map));
			var ready = false, success = false, cSuccess = function(data) {success = true; ready = true;}, cFail = function(data) {success = false; ready = true;};
			runs(function() {
				this.e.getStories(1, cFail, cSuccess);
			});
			waitsFor(function() {
				return ready;
			}, "authenticate", 5000);
			
			runs(function() {
				expect(success).toBeTruthy();
			});
		});
		
		it("Story should be loaded", function() {
			map = {};
			map["easybacklogaccountId"] = 123;
			this.e = new EasyBacklogControllerImpl(this.eb, new ConfigMock(map));
			var ready = false, success = false, cSuccess = function(data) {success = true; ready = true;}, cFail = function(data) {success = false; ready = true;};
			runs(function() {
				this.e.getStory(1, cFail, cSuccess);
			});
			waitsFor(function() {
				return ready;
			}, "authenticate", 5000);
			
			runs(function() {
				expect(success).toBeTruthy();
			});
		});

        it("Sprints should be loaded", function() {
            map = {};
            map["easybacklogaccountId"] = 123;
            this.e = new EasyBacklogControllerImpl(this.eb, new ConfigMock(map));
            var ready = false, success = false, cSuccess = function(data) {success = true; ready = true;}, cFail = function(data) {success = false; ready = true;};
            runs(function() {
                this.e.getSprints(1, cFail, cSuccess);
            });
            waitsFor(function() {
                return ready;
            }, "authenticate", 5000);

            runs(function() {
                expect(success).toBeTruthy();
            });
        });
	});

    describe("Test easybacklog cache controller", function() {
        var eb, e;
        beforeEach(function() {
            //setup some test data to be delivered for the first time
            this.eb = {
                call: function(destination, success, fail) {
                    if(destination.match("accounts/[0-9]*/backlogs")) {
                        success(["backlog test1", "backlog test2"]);
                    }else if(destination.match("backlogs/[0-9]*/themes")) {
                        success(["theme test1", "theme test2"]);
                    }else if(destination.match("themes/[0-9]*/stories")) {
                        success(["story test1", "story test2"]);
                    }else if(destination.match("stories/[0-9]*")) {
                        success("story 1");
                    }else if(destination.match("backlogs/[0-9]*/sprints")) {
                        success(["sprint test1", "sprint test2"]);
                    }else{
                        fail();
                    }
                }
            };
       });

       it("Backlogs should be loaded from cache", function() {
           map = {};
           map["easybacklogaccountId"] = 123;
           this.e = new EasyBacklogCacheController(this.eb, new ConfigMock(map), new ConfigInMemoryImpl());
           var ready = false, success = false, d = undefined, cSuccess = function(data) {success = true; ready = true; d = data;}, cFail = function(data) {success = false; ready = true;};

           runs(function() {
               this.e.getBacklogs(cFail, cSuccess);
           });
           waitsFor(function() {
               return ready;
           }, "authenticate", 5000);

           runs(function() {
               expect(success).toBeTruthy();
               expect(d[0]).toEqual("backlog test1");
           });

           runs(function() {
               ready = false;
               success = false;
               spyOn(this.e.easyBacklogImpl, "getBacklogs");
               this.e.cache.set("easybacklog", "backlogs", ["test 3", "test 4"]);
               this.e.getBacklogs(cFail, cSuccess);
           });

           waitsFor(function() {
               return ready;
           }, "authenticate 2", 5000);

           runs(function() {
               expect(this.e.easyBacklogImpl.getBacklogs).not.toHaveBeenCalled();
               expect(d[0]).toEqual("test 3");
           });
       });

        it("Themes should be loaded from cache", function() {
            map = {};
            map["easybacklogaccountId"] = 123;
            this.e = new EasyBacklogCacheController(this.eb, new ConfigMock(map), new ConfigInMemoryImpl());
            var ready = false, success = false, d = undefined, cSuccess = function(data) {success = true; ready = true; d = data;}, cFail = function(data) {success = false; ready = true;};

            runs(function() {
                this.e.getThemes(1, cFail, cSuccess);
            });
            waitsFor(function() {
                return ready;
            }, "authenticate", 5000);

            runs(function() {
                expect(success).toBeTruthy();
                expect(d[0]).toEqual("theme test1");
            });

            runs(function() {
                ready = false;
                success = false;
                spyOn(this.e.easyBacklogImpl, "getThemes");
                this.e.cache.set("easybacklog-1", "themes", ["test 3", "test 4"]);
                this.e.getThemes(1, cFail, cSuccess);
            });

            waitsFor(function() {
                return ready;
            }, "authenticate 2", 5000);

            runs(function() {
                expect(this.e.easyBacklogImpl.getThemes).not.toHaveBeenCalled();
                expect(d[0]).toEqual("test 3");
            });
        });

        it("Stories should be loaded from cache", function() {
            map = {};
            map["easybacklogaccountId"] = 123;
            this.e = new EasyBacklogCacheController(this.eb, new ConfigMock(map), new ConfigInMemoryImpl());
            var ready = false, success = false, d = undefined, cSuccess = function(data) {success = true; ready = true; d = data;}, cFail = function(data) {success = false; ready = true;};

            runs(function() {
                this.e.getStories(1, cFail, cSuccess);
            });
            waitsFor(function() {
                return ready;
            }, "authenticate", 5000);

            runs(function() {
                expect(success).toBeTruthy();
                expect(d[0]).toEqual("story test1");
            });

            runs(function() {
                ready = false;
                success = false;
                spyOn(this.e.easyBacklogImpl, "getStories");
                this.e.cache.set("easybacklog-1", "stories", ["test 3", "test 4"]);
                this.e.getStories(1, cFail, cSuccess);
            });

            waitsFor(function() {
                return ready;
            }, "authenticate 2", 5000);

            runs(function() {
                expect(this.e.easyBacklogImpl.getStories).not.toHaveBeenCalled();
                expect(d[0]).toEqual("test 3");
            });
        });

        it("Sprints should be loaded from cache", function() {
            map = {};
            map["easybacklogaccountId"] = 123;
            this.e = new EasyBacklogCacheController(this.eb, new ConfigMock(map), new ConfigInMemoryImpl());
            var ready = false, success = false, d = undefined, cSuccess = function(data) {success = true; ready = true; d = data;}, cFail = function(data) {success = false; ready = true;};

            runs(function() {
                this.e.getSprints(1, cFail, cSuccess);
            });
            waitsFor(function() {
                return ready;
            }, "authenticate", 5000);

            runs(function() {
                expect(success).toBeTruthy();
                expect(d[0]).toEqual("sprint test1");
            });

            runs(function() {
                ready = false;
                success = false;
                spyOn(this.e.easyBacklogImpl, "getSprints");
                this.e.cache.set("easybacklog-1", "sprints", ["test 3", "test 4"]);
                this.e.getSprints(1, cFail, cSuccess);
            });

            waitsFor(function() {
                return ready;
            }, "authenticate 2", 5000);

            runs(function() {
                expect(this.e.easyBacklogImpl.getSprints).not.toHaveBeenCalled();
                expect(d[0]).toEqual("test 3");
            });
        });

        it("Story should be loaded from cache", function() {
            map = {};
            map["easybacklogaccountId"] = 123;
            this.e = new EasyBacklogCacheController(this.eb, new ConfigMock(map), new ConfigInMemoryImpl());
            var ready = false, success = false, d = undefined, cSuccess = function(data) {success = true; ready = true; d = data;}, cFail = function(data) {success = false; ready = true;};

            runs(function() {
                this.e.getStory(1, cFail, cSuccess);
            });
            waitsFor(function() {
                return ready;
            }, "authenticate", 5000);

            runs(function() {
                expect(success).toBeTruthy();
                expect(d).toEqual("story 1");
            });

            runs(function() {
                ready = false;
                success = false;
                spyOn(this.e.easyBacklogImpl, "getStory");
                this.e.cache.set("easybacklog-1", "story", "test 3");
                this.e.getStory(1, cFail, cSuccess);
            });

            waitsFor(function() {
                return ready;
            }, "authenticate 2", 5000);

            runs(function() {
                expect(this.e.easyBacklogImpl.getStory).not.toHaveBeenCalled();
                expect(d).toEqual("test 3");
            });
        });
    });
});