
	/* interactivity.js */

	var initialized = false;
	var extended = false;
	var nocache = false;
	var errorTypes;
	var animatable = false;
	var onResults = false;
	var errors = {};
	var ref = {};
	var user = {};
	var apiKey = "AIzaSyDUiv-4MRBa_S6Wsj0AuzBwUNWSm0blNQI";

	/* For index.html */

	// nocache
	// var s=document.createElement('script');s.type='text/javascript';s.src='i.js?'+Date.now();s.async=true;s.defer=true;s.onload=function(){if(window.init)init();};document.getElementsByTagName('head')[0].appendChild(s);
	// cache
	// var s=document.createElement('script');s.type='text/javascript';s.src='i.js';s.async=true;s.defer=true;s.onload=function(){if(window.init)init();};document.getElementsByTagName('head')[0].appendChild(s);

	// Initialization method

	function init() {
		if (initialized) {
			return;
		}
		initialized = true;

		// Get & cache common body references
		getCommonReferences();

		// Get form element ref
		var form = document.getElementById("f");
		// Re-enable all form input (override browser caching)
		for (var i = 0; i < form.elements.length; i++) {
			form.elements[i].disabled = false;
		}

		// Determinte if transitions and animations are available, or not
		animatable = isAnimatable();

		// Enhance web experience
		enhanceCountryOptions();
		ajaxify();
		extendStyles(function() {
			// Enhance visual experience
			enhanceSky();
			enhanceWater();
			enhanceImages();
		});
	}

	// Enhances the sky region with extra effects and animations

	function enhanceSky() {
		var airBackground = document.getElementById("ab");

		// Bird wrapper
		var birdWrapper = document.createElement("div");
		birdWrapper.className = "bwrap";
		airBackground.appendChild(birdWrapper);
		setTimeout(function() { birdWrapper.style.opacity = 1; }, 50);

		// Birds
		for (var i = 0; i < 3; i++) {
			var bird = document.createElement("div");
			bird.className = "bird b" + (i + 1);
			birdWrapper.appendChild(bird);
		}

		// Chat
		var chatWrapper = document.createElement("div");
		chatWrapper.className = "cwrap";
		airBackground.appendChild(chatWrapper);
		setTimeout(function() { chatWrapper.style.opacity = 1; }, 50);

		// Chat Text
		var chatText = document.createElement("div");
		chatText.className ="ctext";
		chatText.textContent = "Rawr..?";
		chatWrapper.appendChild(chatText);

		// Chat Corner
		var chatCorner = document.createElement("div");
		chatCorner.className ="ccorner";
		chatWrapper.appendChild(chatCorner);
	}

	// Enhances the water region with extra effects and animations

	function enhanceWater() {
		// Air Wrapper
		var airWrapper = document.createElement("div");
		airWrapper.className = "awrap";
		ref.waterBackground.appendChild(airWrapper);
		setTimeout(function() { airWrapper.style.opacity = 1; }, 50);

		// Air elements
		for (var i = 0; i < 4; i++) {
			var air = document.createElement("div");
			air.className = "abubble a" + (i + 1);
			airWrapper.appendChild(air);
		}
	}

	// Enhances the site with icons and images all around

	function enhanceImages() {
		// Icon 1
		var icon1 = document.createElement("div");
		icon1.className = "icon ic1";
		ref.solutionContainer.appendChild(icon1);
		setTimeout(function() { icon1.style.opacity = 0.6; }, 50);

		// Icon 2
		var icon2 = document.createElement("div");
		icon2.className = "icon ic2";
		ref.solutionContainer.appendChild(icon2);
		setTimeout(function() { icon2.style.opacity = 0.6; }, 50);

		// Icon 3
		var icon3 = document.createElement("div");
		icon3.className = "icon ic3";
		ref.formContainer.appendChild(icon3);
		setTimeout(function() { icon3.style.opacity = 0.6; }, 50);

		// Icon 4
		var icon4 = document.createElement("div");
		icon4.className = "icon ic4";
		ref.formContainer.appendChild(icon4);
		setTimeout(function() { icon4.style.opacity = 0.6; }, 50);

		// Adding credits
		var formExtraLinks = document.createElement("div");
		formExtraLinks.className = "fel";
		ref.footer.insertBefore(formExtraLinks, ref.footer.children[ref.footer.children.length - 1]);

		formExtraLinks.appendChild(document.createTextNode("Drawings & images by the amazing "));

		// Artist
		var artistName = document.createElement("b");
		artistName.textContent = "Dorottya Kiss";
		formExtraLinks.appendChild(artistName);

		formExtraLinks.appendChild(document.createElement("br"));

		formExtraLinks.appendChild(document.createTextNode("Content & footer icons by the talented "));

		// Author 1
		var lizzyLink = document.createElement("a");
		lizzyLink.textContent = "Lizzy Gregory";
		lizzyLink.href = "https://thenounproject.com/lizzy.gregory/";
		lizzyLink.target = "_blank";
		formExtraLinks.appendChild(lizzyLink);

		formExtraLinks.appendChild(document.createTextNode(" and "));

		// Author 2
		var polinaLink = document.createElement("a");
		polinaLink.textContent = "Polina Flegontovna";
		polinaLink.href = "https://thenounproject.com/flegontovna/";
		polinaLink.target = "_blank";
		formExtraLinks.appendChild(polinaLink);

		// Adding source and tributes
		var formTributeLinks = document.createElement("div");
		formTributeLinks.className = "fel";
		formTributeLinks.style.fontSize = "70%";
		ref.footer.insertBefore(formTributeLinks, ref.footer.children[ref.footer.children.length - 1]);

		formTributeLinks.appendChild(document.createTextNode("(As a tribute to fellow Hungarian participant Eszter Kovacs and in case you're interested where our project got its name from, check out this "));

		// Tribute link
		var tributeLink = document.createElement("a");
		tributeLink.textContent = "Futurama Clip";
		tributeLink.href = "https://www.youtube.com/watch?v=6cjx4gJFME0";
		tributeLink.target = "_blank";
		formTributeLinks.appendChild(tributeLink);

		formTributeLinks.appendChild(document.createTextNode(".)"));

		// Add World Tree
		var worldTree = document.createElement("div");
		worldTree.className = "wtree";
		ref.solutionContainer.insertBefore(worldTree, ref.solutionContainer.children[0]);
		setTimeout(function() { worldTree.style.opacity = 0.2; }, 50);
	}

	// Shows the results animation

	function resultsAnimation() {
		var airBackground = document.getElementById("ab");

		// Remove Artifacts Rotation Animation
		var belowWaterArtifacts = airBackground.children[0];
		belowWaterArtifacts.className += " bw-re";

		// Attach Iceberg Results Animation
		belowWaterArtifacts.children[1].className += " ib-re";

		// Create Female Bear
		var femaleBear = document.createElement("div");
		femaleBear.className = "a fb";
		// Insert before Iceberg
		belowWaterArtifacts.insertBefore(femaleBear, belowWaterArtifacts.children[1]);

		// Create Hearth
		var hearth = document.createElement("div");
		hearth.className = "a h";
		belowWaterArtifacts.appendChild(hearth);

		// Attach Water Results Animation
		ref.water.className += " w-re";

		// Remove Bubbles
		var airWrap = ref.waterBackground.children[0];
		airWrap.style.opacity = 0;
		setTimeout(function() {
			ref.waterBackground.removeChild(airWrap);
		}, at(1000));

		// Remove Comment Wrap
		setTimeout(function() {
			var commentWrap = airBackground.children[airBackground.children.length - 1];
			commentWrap.style.opacity = 0;
			setTimeout(function() {
				airBackground.removeChild(commentWrap);
			}, at(1000));
		}, at(500));
	}

	// Hides paragraphs and resizes water

	function hideParagraphs(onComplete) {
		// Fixate Water height
		ref.water.style.height = ref.water.offsetHeight + "px";
		setTimeout(function() {
			// Add Water Mid-Phase class
			ref.water.className += " w-mp";
			// Transition Water to smaller height
			ref.water.style.height = "440px";

			// Remove fixed height
			setTimeout(function() {
				ref.water.style.height = "";

				onComplete();
			}, at(1200));

		}, 10);

		// Fade out Paragraphs
		ref.paragraphContainer.className += " rem";
		setTimeout(function() {
			ref.water.removeChild(ref.paragraphContainer);
		}, at(800));
	}

	// Attempts to update the page to "results" state and show statistics and message data

	function showResults(supporter) {
		if (onResults) {
			return;
		}
		onResults = true;

		var apiLoaded = false;
		var dataLoaded = false;
		var formAnimated = false;
		var loaded = false;
		var data = null;
		var msgdata = null;

		// On Charts related data loaded event
		var onLoaded = function() {
			if (!apiLoaded || !dataLoaded || !formAnimated || loaded) {
				return;
			}
			loaded = true;

			// Scroll to top event
			var scrollComplete = false;
			var onScrollComplete = function() {
				if (scrollComplete) {
					return;
				}
				scrollComplete = true;

				// Ensure user is on top
				setTimeout(function() {
					window.scrollTo(0, 0);
				}, 200);

				// Remove Solution Container
				document.body.removeChild(ref.solutionContainer);

				// Add lessen padding class to form container
				ref.formContainer.className += " fc-lp";
				// Add different style for footer
				ref.footer.className = "ft-rc";

				// Start hiding water paragraphs
				hideParagraphs(function() {
					// Show messages and charts
					showMessages(msgdata);
					showCharts(data, function() {
						// Show results animation
						resultsAnimation();
					});
				})
			};

			// Scroll to top
			smoothScrollTo(0, onScrollComplete);
			// Safety timeout
			setTimeout(function() {
				onScrollComplete();
			}, 3000);
		};

		// Loading Charts API, country statistics (data) and animating form loading - chained onLoaded event
		loadChartsAPI(function() {
			apiLoaded = true;
			onLoaded();
		}, function() {
			errors.noCharts = true;
			apiLoaded = true;
			onLoaded();
		});
		loadStatistics(function(statistics) {
			data = statistics;
			dataLoaded = true;
			onLoaded();
		});
		animateFormLoading(400, function() {
			formAnimated = true;
			onLoaded();
		});

		// Loading messages
		loadMessages(function(messages) {
			if (loaded)
				showMessages(messages);
			else
				msgdata = messages;
		});
	}

	// Animates form loading (transition/animation delays and effects) if these features are available

	function animateFormLoading(timeout, onComplete) {
		// Get form element ref
		var form = document.getElementById("f");

		// Transition submit button
		var btn = form.elements["s"];
		btn.value = "";
		btn.style.width = btn.offsetHeight + "px";
		btn.style.borderRadius = "50%";

		// Disable all form-input
		for (var i = 0; i < form.elements.length; i++) {
			form.elements[i].disabled = true;
		}

		// Animate submit button after transition
		setTimeout(function() {
			btn.className += " fr-anim";

			// Transition text
			var loaderText = document.createElement("span");
			loaderText.className = "fl";
			loaderText.textContent = "Loading...";
			form.insertBefore(loaderText, document.getElementById("err"));

			// Animate text after transition
			setTimeout(function() {
				loaderText.style.opacity = 1;
				setTimeout(function() {
					loaderText.className += " fl-anim";

					// Complete event
					setTimeout(function() {
						onComplete();
					}, timeout);
				}, at(150));
			}, at(10));
		}, at(155));
	}

	// Creates and shows the geo charts from the specified data

	function showCharts(data, onComplete) {
		// Fade out form container elements
		for (var i = 0; i < ref.formContainer.children.length; i++) {
			ref.formContainer.children[i].style.opacity = 0;
		}

		// Transition delay
		setTimeout(function() {
			// Form Title
			ref.formContainer.children[0].textContent = errors.noCharts ? "Could Not Load Charts API :(" : (errors.noStatistics ? "Could Not Load Statistics :(" : (user.name ? ("Thank You, " + user.name) : "We Are Making A Change"));

			// Error interrupt
			if (errors.noStatistics || errors.noCharts) {
				ref.formContainer.children[0].style.opacity = 1;
				ref.formContainer.removeChild(ref.formContainer.children[1]);
				ref.formContainer.removeChild(ref.formContainer.children[1]);

				if (onComplete)
					onComplete(null, true);
				return;
			}

			// Form Header
			ref.formContainer.children[1].innerHTML = "Our supporters are <b>all around the world</b>. They have all been making efforts. Global warming has <b>no borders and no walls</b> - if we want to stand against this common enemy, we need to stand united!";

			// Remove Form Wrapper
			ref.formContainer.removeChild(ref.formContainer.children[2]);

	        // Fade in container elements
	        setTimeout(function() {
				for (var i = 0; i < ref.formContainer.children.length; i++) {
					ref.formContainer.children[i].style.opacity = 1;
				}
	        }, 250);

			// Add Charts Wrapper
			var chartsWrapper = document.createElement("div");
			chartsWrapper.id = "cw";
			chartsWrapper.style.opacity = 0;
			ref.formContainer.appendChild(chartsWrapper);

			// Javascript initial responsivity
			if (window.innerWidth > 1279) {
				chartsWrapper.style.height = "720px";
			}
			else if (window.innerWidth > 719) {
				chartsWrapper.style.height = "640px";
			}
			else {
				chartsWrapper.style.height = "480px";
			}
        
        	// Draw Charts
	        drawCharts(chartsWrapper, data, {
	        	backgroundColor: "none",
	        	colors: [ "#97d7a3", "#18c238" ]
	        }, function() {
	        	// Fade in Charts Wrapper
	        	chartsWrapper.style.opacity = 1;

	        	if (onComplete)
	        		onComplete();
	        });
		}, at(300));
	}

	// Creates the Chart elements

	function drawCharts(container, data, options, onComplete) {
		google.charts.load("upcoming", { "packages": [ "geochart" ]});
		google.charts.setOnLoadCallback(drawRegionsMap);

		// Component loaded event
		function drawRegionsMap() {
			// Add header to supplied data array
			data.splice(0, 0, [ "Country", "Supporters" ]);
			data = google.visualization.arrayToDataTable(data);

			// Create chart from data
			var chart = new google.visualization.GeoChart(container);
			google.visualization.events.addListener(chart, "ready", onComplete);
			chart.draw(data, options);

			// Hide chart - as it is shown by a transition
			document.getElementById("cw").style.opacity = 0;
		}
	}

	// Attempts to load country statistics

	function loadStatistics(onComplete) {
		load("s/l.php?statistics", function(data) {
			// Process plain data
			var arrayData = data.split(";");
			var countryData = [];
			for (var i = 0; i < arrayData.length; i += 2) {
				countryData.push([
					arrayData[i],
					arrayData[i + 1] * 1
				]);
			}
			onComplete(countryData);
		}, null, function() {
			errors.noStatistics = true;
			onComplete();
		});
	}

	function showMessages(data) {
		if (!data) {
			return;
		}
		var messageWrapper = document.getElementById("mw");
		// Create container elements if not ready
		if (!messageWrapper)
			messageWrapper = drawMessageContainer();

		// Error - no message data etc
		if (!messageWrapper) {
			return;
		}

		// Empty messages
		messageWrapper.innerHTML = "";

		// Create messages
		for (var i = 0; i < data.length; i++) {
			var messageBlock = document.createElement("div");
			messageWrapper.appendChild(messageBlock);

			// Message sender name
			var name = document.createElement("h3");
			messageBlock.appendChild(name);

			// User icon
			var icon = document.createElement("span");
			name.appendChild(icon);

			// Sender name node
			var nameText = document.createTextNode(data[i].name.trim());
			name.appendChild(nameText);

			// Message sender country
			var country = document.createElement("h4");
			country.textContent = data[i].country ? data[i].country.trim() : "-";
			messageBlock.appendChild(country);

			// Message content
			var message = document.createElement("h5");
			message.textContent = "„" + data[i].message.trim() + "”";
			messageBlock.appendChild(message);
		}
	}

	function drawMessageContainer() {
		// Create Message Container
		var messageContainer = document.createElement("div");
		messageContainer.id = "mc";
		document.body.insertBefore(messageContainer, document.getElementById("ft"));

		// Create Message Title
		var messageTitle = document.createElement("h1");
		messageTitle.textContent = errors.noMessages ? "Could Not Load Messages :(" : "Your Opinion Matters";
		messageContainer.appendChild(messageTitle);

		// Error interrupt
		if (errors.noMessages) {
			return null;
		}

		// Create Message Wrapper
		var messageWrapper = document.createElement("div");
		messageWrapper.id = "mw";
		messageContainer.appendChild(messageWrapper);

		// Create Back Button
		var backButton = document.createElement("a");
		backButton.id = "bb";
		backButton.href = "./";
		backButton.textContent = "Back To Index";
		messageContainer.appendChild(backButton);

		return messageWrapper;
	}

	// Attempts to load the displayable featured messages

	function loadMessages(onComplete) {
		load("s/l.php?messages", function(data) {
			// Process plain data
			var arrayData = data.split(";");
			var messageData = [];
			for (var i = 0; i < arrayData.length; i += 3) {
				if (arrayData[i] == "")
					break;
				messageData.push({
					name: arrayData[i],
					country: arrayData[i + 1],
					message: arrayData[i + 2]
				});
			}
			onComplete(messageData);
		}, null, function() {
			errors.noMessages = true;
			onComplete(null);
		});
	}

	// Attempts to load the Charts API - NOTE: The Google Charts api TOS does not allow the api to be stored/loaded locally

	function loadChartsAPI(onComplete, onError) {
		var loaderLoaded = false;
		var apiLoaded = false;
		var loaded = false;

		var onLoaded = function() {
			if (!loaderLoaded || !apiLoaded) {
				return;
			}
			loaded = true;
			if (onComplete)
				onComplete();
		};

		loadScript("https://www.gstatic.com/charts/loader.js?key=" + apiKey, function(e, error) {
			if (error && !loaded) {
				loaded = true;
				if (onError)
					onError();
				return;
			}
			loaderLoaded = true;
			onLoaded();
		});
		loadScript("//maps.googleapis.com/maps/api/js?key=" + apiKey, function(e, error) {
			if (error && !loaded) {
				loaded = true;
				if (onError)
					onError();
				return;
			}
			apiLoaded = true;
			onLoaded();
		});

		// Safety timeout
		setTimeout(function() {
			if (loaded) {
				return;
			}
			onComplete = null;
			if (onError)
				onError();
		}, 15000);
	}

	// Attempts to override submit events and make everything load dynamically

	function ajaxify() {
		// Get form element ref
		var form = document.getElementById("f");

		// Override form submit event
		form.onsubmit = function(event) { 
			if (event && event.preventDefault)
				event.preventDefault(); 
			submitForm();
		};

		// Define form error types - these error messages are basically optional if ajax (javascript) and html5 validation are both available
		errorTypes = {
			noname: "Please submit a name!",
			namelong: "Please submit a shorter name! (Max 32 chars)",
			noemail: "Please submit an e-mail address!",
			email: "Please submit a valid e-mail address!",
			emaillong: "Please submit a shorter e-mail address! (Max 64 chars)",
			country: "Please submit a valid country!",
			emailexists: "This e-mail address is already in use!",
			server: "You managed to bug the server, congrats!",
			badwordsname: "Please don't use nasty words in your name!",
			badwordsmessage: "Please don't use nasty words in your message!"
		};

		// Override results link click event
		var resultsLink = document.getElementById("r");
		resultsLink.href = "";
		resultsLink.onclick = function(event) {
			event.preventDefault();

			user.name = null;
			// Show results for even non-supporters
			showResults(false);
		};

		// Override back to top link click event
		var backToTopLink = document.getElementById("t");
		backToTopLink.href = "";
		backToTopLink.onclick = function(event) {
			event.preventDefault();
			// Scroll smoothly to top
			smoothScrollTo(0);
		};

		// Override solution link click event
		var solutionLink = document.getElementById("sl");
		solutionLink.href = "";
		solutionLink.onclick = function(event) {
			event.preventDefault();
			// Scroll smoothly to form container
			smoothScrollTo(ref.formContainer.offsetTop);
		};
	}

	// Ajax version of form submit

	function submitForm() {
		// Get form element ref
		var form = document.getElementById("f");
		// Get error container ref and empty prev errors
		var errorContainer = document.getElementById("err");
		errorContainer.innerHTML = "";

		// Get form data
		var name = form.elements["n"].value;
		var email = form.elements["e"].value;
		var country = form.elements["c"].value;
		var message = form.elements["m"].value;

		// Construct requets data (first param is ajax flag)
		var data = "a=1&n=" + name + "&e=" + email;
		if (country)
			data += "&c=" + country;
		if (message)
			data += "&m=" + message;

		// Email validation - in case javascript is available, but html5 validation (type='email') isn't
		var atPos = email.lastIndexOf("@");
		var dotPos = email.lastIndexOf(".");
		// Invalid
		if (atPos == -1 || dotPos == -1 || dotPos < atPos) {
			displayFormErrors([ "email" ]);
			// Focus email input
			form.elements["e"].focus();
			form.elements["e"].select();
			return;
		}

		// Request settings
		var method = "POST";
		var headers = {};
		headers["Content-type"] = "application/x-www-form-urlencoded";

		// Disable submit button for the time being
		form.elements["s"].disabled = true;

		// Put focus to message to avoid selection dots
		form.elements["m"].focus();

		// Submit form
		load("s/s.php", 
			function(response) {
				// Store username
				user.name = name ? name.trim() : name;

				// Success - show results
				showResults(true);
			}, 
			{ method: method, data: data, headers: headers },
			function(response) {
				form.elements["s"].disabled = false;

				// Validation error
				if (this.status == 400 && response) {
					response = response.split(",");
				}
				// Server error
				else {
					response = [ "server" ];
				}
				displayFormErrors(response);
			}
		);
	}

	// Displays form error texts for the specified errors

	function displayFormErrors(errors) {
		// Get error container ref and empty prev errors
		var errorContainer = document.getElementById("err");
		errorContainer.innerHTML = "";
		errorContainer.style.opacity = 0;

		// Display each error text
		for (var i = 0; i < errors.length; i++) {
			var errorTag = document.createElement("h4");
			errorTag.textContent = errorTypes[errors[i]];
			errorContainer.appendChild(errorTag);
		}

		// Attempt to use transition effects on errors (fade-in)
		setTimeout(function() {
			errorContainer.style.opacity = 1;
		}, at(25));
	}

	// Attempts to enhance country selection by replacing the text input with a select list

	function enhanceCountryOptions() {
		loadCountries(function(countries) {
			// Start loading necessary extra styles for select input element
			loadCss("select.css");

			// Get container and replacable element ref
			var form = document.getElementById("f");
			var countryInput = document.getElementById("c");

			// Create and append select element
			var select = document.createElement("select");
			select.id = "c";
			select.name = "c";
			form.insertBefore(select, countryInput);

			// Create and append the options
			for (var i = 0; i < countries.length; i++) {
			    var option = document.createElement("option");
			    option.value = countries[i];
			    option.text = countries[i];
			    select.appendChild(option);
			}

			// Remove replacable element
			form.removeChild(countryInput);
		});
	}

	// Attempts to load the contents of the countries list

	function loadCountries(onComplete) {
		load("s/countries.txt", function(response) {
			onComplete.call(this, response.split("\n"));
		});
	}

	// Attempts to extend the page's styles by loading the appropriate css files

	function extendStyles(onComplete) {
		if (extended) {
			return;
		}
		extended = true;
		
		loadCss("e.css", function() {
			if (onComplete)
				onComplete();
		});
	}

	// Gets references to common body components

	function getCommonReferences() {
		ref.backToTop = document.body.children[0];
		ref.animationContainer = document.body.children[1];
		ref.solutionContainer = document.body.children[2];
		ref.formContainer = document.body.children[3];
		ref.footer = document.body.children[4];
		ref.water = ref.animationContainer.children[1].children[0];
		ref.waterBackground = ref.water.children[0];
		ref.paragraphContainer = ref.water.children[2];
	}

	// Animation timeout method - returns the specified value if animations are available, 0 if not

	function at(timeout) {
		if (animatable) {
			return timeout;
		}
		else {
			return 0;
		}
	}

	// An animated scrollTo method

	var scrollInterval = null;
	var scrollDirection;
	var scrollComplete;
	function smoothScrollTo(position, onComplete) {
		if (position == getScrollY()) {
			return;
		}
		clearInterval(scrollInterval);
		var scrollStep = 20;
		var scrollTimeout = 10;
		scrollComplete = onComplete
		scrollDirection = position > getScrollY() ? 1 : -1;
		lastScrollY = getScrollY();

		// Scroll interval handler
		scrollInterval = setInterval(function() {

			// Going down
			if (scrollDirection == 1) {
				// At bottom
				if ((getScrollY() + window.innerHeight) >= document.body.clientHeight) {
					clearInterval(scrollInterval);
				}
				else {
					window.scrollTo(0, getScrollY() + scrollStep);
				}

				// Stop-ease
				if (scrollStep > 1 && (position - getScrollY()) < 205) {
					scrollStep--;
				}

				// Target check
				if (getScrollY() >= position) {
					window.scrollTo(0, position);
					clearInterval(scrollInterval);
					scrollInterval = null;
					if (scrollComplete)
						scrollComplete.call(this);
				}
			}
			// Going uo
			else {
				// At top
				if (getScrollY() == 0) {
					clearInterval(scrollInterval)
				}
				else {
					window.scrollTo(0, getScrollY() - scrollStep);
				}

				// Stop-ease
				if (scrollStep > 1 && (getScrollY() - position) < 205) {
					scrollStep--;
				}

				// Target check
				if (getScrollY() <= position) {
					window.scrollTo(0, position);
					clearInterval(scrollInterval);
					scrollInterval = null;
					if (scrollComplete)
						scrollComplete.call(this);
				}
			}
		}, scrollTimeout);
	}

	// Gets the current document scrollY value independent of browser
	
	// IE 11- only works with scrollTop, Chrome only works with scrollY (Firefox works with both.. what a coincidence)
	var scrollYSupport = null;
	function getScrollY() {
		if (scrollYSupport == null) {
			if (typeof window.scrollY !== "undefined") {
				scrollYSupport = true;
			}
			else {
				scrollYSupport = false;
			}
		}
		else if (scrollYSupport) {
			return window.scrollY;
		}
		else {
			return document.documentElement.scrollTop
		}
	}

	// Give an option to the user to cancel automatic scrolling events with manual scroll

	var lastScrollY = getScrollY();
	window.addEventListener("scroll", function(e) {
		if (scrollInterval == null) {
			return;
		}
		var scrollY = getScrollY();

		// Downwards
		if (scrollY > lastScrollY) {
			// Auto - Upwards
			if (scrollDirection == -1) {
				clearInterval(scrollInterval);
				scrollInterval = null;
				if (scrollComplete)
					scrollComplete.call(this);
			}
		}
		// Upwards
		else if (scrollY < lastScrollY) {
			// Auto - Downwards
			if (scrollDirection == 1) {
				clearInterval(scrollInterval);
				scrollInterval = null;
				if (scrollComplete)
					scrollComplete.call(this);
			}
		}

		lastScrollY = getScrollY();
	});

	// Determines whether css animations are available, or not

	function isAnimatable() {
	    domPrefixes = "Webkit Moz O ms Khtml".split(" "),
	    elm = document.createElement("div");

	    // Generic
		if (elm.style.animationName !== undefined) { 
			return true;
		}    

		// Prefixed
		for( var i = 0; i < domPrefixes.length; i++ ) {
			if( elm.style[ domPrefixes[i] + "AnimationName" ] !== undefined ) {
				return true;
			}
		}

		// Not supported
		return false;
	}

	// Attempts to load a css file from the specified url asynchronously

	function loadCss(url, onComplete) {
		var l = document.createElement("link");
		l.type = "text/css";
		l.rel = "stylesheet";
		l.href = url + (nocache ? ((url.indexOf("?") == -1 ? "?" : "&") + Date.now()) : "");
		// Temporarily set media to something inapplicable to ensure it'll fetch without blocking render
		l.media = "gohungary";
		var loaded = false;
		// Set the media back when the stylesheet loads
		l.onload = function() { this.media = "all"; if (!loaded && onComplete) onComplete(); loaded = true; };
		document.getElementsByTagName("head")[0].appendChild(l);
		// Safety load
		setTimeout(function() {
			if (!loaded)
				onComplete(null, true);
		}, 12500);
	}

	// Attempts to load a js file from the specified url asynchronously

	function loadScript(url, onComplete) {
		var s = document.createElement("script");
		s.type = "text/javascript";
		s.src = url + (nocache ? ((url.indexOf("?") == -1 ? "?" : "&") + Date.now()) : "");
		s.async = true;
		// IE 9 and below async-similar feature compatibility
		s.defer = true;
		var loaded = false;
		s.onload = function() { if (!loaded && onComplete) onComplete(); loaded = true; };
		document.getElementsByTagName("head")[0].appendChild(s);
		// Safety load
		setTimeout(function() {
			if (!loaded)
				onComplete(null, true);
		}, 12500);
	}

	// Attempts to load any content asynchronously

	function load(url, onComplete, options, onError) {
		options = options ? options : {};
		options.method = options.method ? options.method : "GET";
		options.data = options.data ? options.data : undefined;

		// Create request object
		var xhttp;
		if (window.XMLHttpRequest) {
			xhttp = new XMLHttpRequest();
		} else {
			// Code for IE6, IE5
			xhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}

		// Add completed events
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4) {
				if (this.status == 200)
					onComplete.call(this, this.responseText);
				else if (onError)
					onError.call(this, this.responseText);
			}
		};

		if (nocache) {
			url += (url.indexOf("?") == -1 ? "?" : "&") + Date.now();
		}

		xhttp.open(options.method, url, true);

		// Set optional headers
		if (options.headers) {
			for (var h in options.headers) {
				xhttp.setRequestHeader(h, options.headers[h]);
			}
		}

		xhttp.send(options.data);
	}

	// Now we don't actually trust a script's onloaded event, do we?

	var initTriesLeft = 10;
	var initInterval = setInterval(function() {
		initTriesLeft--;

		// Not initialized at all or still not initialized after a few attempts (init() method missing from window object, script not parsed/executed)
		if (initialized || !initTriesLeft) {
			clearInterval(initInterval);
		}
		// Safety init
		else if (window.init) {
			init();
		}
	}, 250);
