describe('LearnJS', function() {
//first test to test is there is 1 thing inside of view-container class AND in problem-view class
	it('can show a problem view', function() {
		learnjs.showView('#problem-1');
		expect($('.view-container .problem-view').length).toEqual(1);
	});
//second test to test if landing page shows when no hash provided
	it('shows the landing page when there is no hash', function() {
		learnjs.showView('');
		expect($('.view-container .landing-view').length).toEqual(1);
	});
//third test spies on problemView function to see if '42' was passed to it
	it('passes the hash view parameter to the view function', function() {
		spyOn(learnjs, 'problemView');
		learnjs.showView('#problem-42');
		expect(learnjs.problemView).toHaveBeenCalledWith('42');
	});
//5th test checks if showview function is called with url hash as argument
	it('invokes the router when loaded', function() {
		spyOn(learnjs, 'showView');
		learnjs.appOnReady();
		expect(learnjs.showView).toHaveBeenCalledWith(window.location.hash)
	})

//6th test
	it('subscribes to the hash change event', function() {
		learnjs.appOnReady();
		spyOn(learnjs,'showView');
		$(window).trigger('hashchange');
		expect(learnjs.showView).toHaveBeenCalledWith(window.location.hash);
	});

//this is a new context called 'problem view' within the larger 'LearnJS' context
	describe('problem view', function() {
//4th test tests to see if problem number is in result of problem view function		
		it('has a title that includes the problem number', function() {
			var view = learnjs.problemView('1');
			expect(view.text()).toEqual('Problem #1')
		});
	}); 
});