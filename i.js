var initialized=false;var extended=false;var nocache=false;var errorTypes;var animatable=false;var onResults=false;var errors={};var ref={};var user={};var apiKey="AIzaSyDUiv-4MRBa_S6Wsj0AuzBwUNWSm0blNQI";function init(){if(initialized)return;initialized=true;getCommonReferences();var form=document.getElementById("f");for(var i=0;i<form.elements.length;i++){form.elements[i].disabled=false}animatable=isAnimatable();enhanceCountryOptions();ajaxify();extendStyles(function(){enhanceSky();enhanceWater();enhanceImages()})}function enhanceSky(){var airBackground=document.getElementById("ab");var birdWrapper=document.createElement("div");birdWrapper.className="bwrap";airBackground.appendChild(birdWrapper);setTimeout(function(){birdWrapper.style.opacity=1},50);for(var i=0;i<3;i++){var bird=document.createElement("div");bird.className="bird b"+(i+1);birdWrapper.appendChild(bird)}var chatWrapper=document.createElement("div");chatWrapper.className="cwrap";airBackground.appendChild(chatWrapper);setTimeout(function(){chatWrapper.style.opacity=1},50);var chatText=document.createElement("div");chatText.className="ctext";chatText.textContent="Rawr..?";chatWrapper.appendChild(chatText);var chatCorner=document.createElement("div");chatCorner.className="ccorner";chatWrapper.appendChild(chatCorner)}function enhanceWater(){var airWrapper=document.createElement("div");airWrapper.className="awrap";ref.waterBackground.appendChild(airWrapper);setTimeout(function(){airWrapper.style.opacity=1},50);for(var i=0;i<4;i++){var air=document.createElement("div");air.className="abubble a"+(i+1);airWrapper.appendChild(air)}}function enhanceImages(){var icon1=document.createElement("div");icon1.className="icon ic1";ref.solutionContainer.appendChild(icon1);setTimeout(function(){icon1.style.opacity=0.6},50);var icon2=document.createElement("div");icon2.className="icon ic2";ref.solutionContainer.appendChild(icon2);setTimeout(function(){icon2.style.opacity=0.6},50);var icon3=document.createElement("div");icon3.className="icon ic3";ref.formContainer.appendChild(icon3);setTimeout(function(){icon3.style.opacity=0.6},50);var icon4=document.createElement("div");icon4.className="icon ic4";ref.formContainer.appendChild(icon4);setTimeout(function(){icon4.style.opacity=0.6},50);var formExtraLinks=document.createElement("div");formExtraLinks.className="fel";ref.footer.insertBefore(formExtraLinks,ref.footer.children[ref.footer.children.length-1]);formExtraLinks.appendChild(document.createTextNode("Drawings & images by the amazing "));var artistName=document.createElement("b");artistName.textContent="Dorottya Kiss";formExtraLinks.appendChild(artistName);formExtraLinks.appendChild(document.createElement("br"));formExtraLinks.appendChild(document.createTextNode("Content & footer icons by the talented "));var lizzyLink=document.createElement("a");lizzyLink.textContent="Lizzy Gregory";lizzyLink.href="https://thenounproject.com/lizzy.gregory/";lizzyLink.target="_blank";formExtraLinks.appendChild(lizzyLink);formExtraLinks.appendChild(document.createTextNode(" and "));var polinaLink=document.createElement("a");polinaLink.textContent="Polina Flegontovna";polinaLink.href="https://thenounproject.com/flegontovna/";polinaLink.target="_blank";formExtraLinks.appendChild(polinaLink);var formTributeLinks=document.createElement("div");formTributeLinks.className="fel";formTributeLinks.style.fontSize="70%";ref.footer.insertBefore(formTributeLinks,ref.footer.children[ref.footer.children.length-1]);formTributeLinks.appendChild(document.createTextNode("(As a tribute to fellow Hungarian participant Eszter Kovacs and in case you're interested where our project got its name from, check out this "));var tributeLink=document.createElement("a");tributeLink.textContent="Futurama Clip";tributeLink.href="https://www.youtube.com/watch?v=6cjx4gJFME0";tributeLink.target="_blank";formTributeLinks.appendChild(tributeLink);formTributeLinks.appendChild(document.createTextNode(".)"));var worldTree=document.createElement("div");worldTree.className="wtree";ref.solutionContainer.insertBefore(worldTree,ref.solutionContainer.children[0]);setTimeout(function(){worldTree.style.opacity=0.2},50)}function resultsAnimation(){var airBackground=document.getElementById("ab");var belowWaterArtifacts=airBackground.children[0];belowWaterArtifacts.className+=" bw-re";belowWaterArtifacts.children[1].className+=" ib-re";var femaleBear=document.createElement("div");femaleBear.className="a fb";belowWaterArtifacts.insertBefore(femaleBear,belowWaterArtifacts.children[1]);var hearth=document.createElement("div");hearth.className="a h";belowWaterArtifacts.appendChild(hearth);ref.water.className+=" w-re";var airWrap=ref.waterBackground.children[0];airWrap.style.opacity=0;setTimeout(function(){ref.waterBackground.removeChild(airWrap)},at(1000));setTimeout(function(){var commentWrap=airBackground.children[airBackground.children.length-1];commentWrap.style.opacity=0;setTimeout(function(){airBackground.removeChild(commentWrap)},at(1000))},at(500))}function hideParagraphs(onComplete){ref.water.style.height=ref.water.offsetHeight+"px";setTimeout(function(){ref.water.className+=" w-mp";ref.water.style.height="440px";setTimeout(function(){ref.water.style.height="";onComplete()},at(1200))},10);ref.paragraphContainer.className+=" rem";setTimeout(function(){ref.water.removeChild(ref.paragraphContainer)},at(800))}function showResults(supporter){if(onResults)return;onResults=true;var apiLoaded=false;var dataLoaded=false;var formAnimated=false;var loaded=false;var data=null;var msgdata=null;var onLoaded=function(){if(!apiLoaded||!dataLoaded||!formAnimated||loaded)return;loaded=true;var scrollComplete=false;var onScrollComplete=function(){if(scrollComplete)return;scrollComplete=true;setTimeout(function(){window.scrollTo(0,0)},200);document.body.removeChild(ref.solutionContainer);ref.formContainer.className+=" fc-lp";ref.footer.className="ft-rc";hideParagraphs(function(){showMessages(msgdata);showCharts(data,function(){resultsAnimation()})})};smoothScrollTo(0,onScrollComplete);setTimeout(function(){onScrollComplete()},3000)};loadChartsAPI(function(){apiLoaded=true;onLoaded()},function(){errors.noCharts=true;apiLoaded=true;onLoaded()});loadStatistics(function(statistics){data=statistics;dataLoaded=true;onLoaded()});animateFormLoading(400,function(){formAnimated=true;onLoaded()});loadMessages(function(messages){if(loaded)showMessages(messages);else msgdata=messages})}function animateFormLoading(timeout,onComplete){var form=document.getElementById("f");var btn=form.elements["s"];btn.value="";btn.style.width=btn.offsetHeight+"px";btn.style.borderRadius="50%";for(var i=0;i<form.elements.length;i++){form.elements[i].disabled=true}setTimeout(function(){btn.className+=" fr-anim";var loaderText=document.createElement("span");loaderText.className="fl";loaderText.textContent="Loading...";form.insertBefore(loaderText,document.getElementById("err"));setTimeout(function(){loaderText.style.opacity=1;setTimeout(function(){loaderText.className+=" fl-anim";setTimeout(function(){onComplete()},timeout)},at(150))},at(10))},at(155))}function showCharts(data,onComplete){for(var i=0;i<ref.formContainer.children.length;i++){ref.formContainer.children[i].style.opacity=0}setTimeout(function(){ref.formContainer.children[0].textContent=errors.noCharts?"Could Not Load Charts API :(":(errors.noStatistics?"Could Not Load Statistics :(":(user.name?("Thank You, "+user.name):"We Are Making A Change"));if(errors.noStatistics||errors.noCharts){ref.formContainer.children[0].style.opacity=1;ref.formContainer.removeChild(ref.formContainer.children[1]);ref.formContainer.removeChild(ref.formContainer.children[1]);if(onComplete)onComplete(null,true);return}ref.formContainer.children[1].innerHTML="Our supporters are <b>all around the world</b>. They have all been making efforts. Global warming has <b>no borders and no walls</b> - if we want to stand against this common enemy, we need to stand united!";ref.formContainer.removeChild(ref.formContainer.children[2]);setTimeout(function(){for(var i=0;i<ref.formContainer.children.length;i++){ref.formContainer.children[i].style.opacity=1}},250);var chartsWrapper=document.createElement("div");chartsWrapper.id="cw";chartsWrapper.style.opacity=0;ref.formContainer.appendChild(chartsWrapper);if(window.innerWidth>1279){chartsWrapper.style.height="720px"}else if(window.innerWidth>719){chartsWrapper.style.height="640px"}else{chartsWrapper.style.height="480px"}drawCharts(chartsWrapper,data,{backgroundColor:"none",colors:["#97d7a3","#18c238"]},function(){chartsWrapper.style.opacity=1;if(onComplete)onComplete()})},at(300))}function drawCharts(container,data,options,onComplete){google.charts.load("upcoming",{"packages":["geochart"]});google.charts.setOnLoadCallback(drawRegionsMap);function drawRegionsMap(){data.splice(0,0,["Country","Supporters"]);data=google.visualization.arrayToDataTable(data);var chart=new google.visualization.GeoChart(container);google.visualization.events.addListener(chart,"ready",onComplete);chart.draw(data,options);document.getElementById("cw").style.opacity=0}}function loadStatistics(onComplete){load("s/l.php?statistics",function(data){var arrayData=data.split(";");var countryData=[];for(var i=0;i<arrayData.length;i+=2){countryData.push([arrayData[i],arrayData[i+1]*1])}onComplete(countryData)},null,function(){errors.noStatistics=true;onComplete()});var data="Germany;12;			Hungary;43;			Slovakia;3;			Romania;7;			Serbia;11;			Switzerland;4;			France;25;			Russia;15;			United Kingdom;32;			United States;33;			Canada;25;			Brazil;12;			Sweden;19"}function showMessages(data){if(!data)return;var messageWrapper=document.getElementById("mw");if(!messageWrapper)messageWrapper=drawMessageContainer();if(!messageWrapper)return;messageWrapper.innerHTML="";for(var i=0;i<data.length;i++){var messageBlock=document.createElement("div");messageWrapper.appendChild(messageBlock);var name=document.createElement("h3");messageBlock.appendChild(name);var icon=document.createElement("span");name.appendChild(icon);var nameText=document.createTextNode(data[i].name.trim());name.appendChild(nameText);var country=document.createElement("h4");country.textContent=data[i].country?data[i].country.trim():"-";messageBlock.appendChild(country);var message=document.createElement("h5");message.textContent="„"+data[i].message.trim()+"”";messageBlock.appendChild(message)}}function drawMessageContainer(){var messageContainer=document.createElement("div");messageContainer.id="mc";document.body.insertBefore(messageContainer,document.getElementById("ft"));var messageTitle=document.createElement("h1");messageTitle.textContent=errors.noMessages?"Could Not Load Messages :(":"Your Opinion Matters";messageContainer.appendChild(messageTitle);if(errors.noMessages)return null;var messageWrapper=document.createElement("div");messageWrapper.id="mw";messageContainer.appendChild(messageWrapper);var backButton=document.createElement("a");backButton.id="bb";backButton.href="./";backButton.textContent="Back To Index";messageContainer.appendChild(backButton);return messageWrapper}function loadMessages(onComplete){load("s/l.php?messages",function(data){var arrayData=data.split(";");var messageData=[];for(var i=0;i<arrayData.length;i+=3){if(arrayData[i]=="")break;messageData.push({name:arrayData[i],country:arrayData[i+1],message:arrayData[i+2]})}onComplete(messageData)},null,function(){errors.noMessages=true;onComplete(null)})}function loadChartsAPI(onComplete,onError){var loaderLoaded=false;var apiLoaded=false;var loaded=false;var onLoaded=function(){if(!loaderLoaded||!apiLoaded)return;loaded=true;if(onComplete)onComplete()};loadScript("https://www.gstatic.com/charts/loader.js?key="+apiKey,function(e,error){if(error&&!loaded){loaded=true;if(onError)onError();return}loaderLoaded=true;onLoaded()});loadScript("//maps.googleapis.com/maps/api/js?key="+apiKey,function(e,error){if(error&&!loaded){loaded=true;if(onError)onError();return}apiLoaded=true;onLoaded()});setTimeout(function(){if(loaded)return;onComplete=null;if(onError)onError()},5000)}function ajaxify(){var form=document.getElementById("f");form.onsubmit=function(event){if(event&&event.preventDefault)event.preventDefault();submitForm()};errorTypes={noname:"Please submit a name!",namelong:"Please submit a shorter name! (Max 32 chars)",noemail:"Please submit an e-mail address!",email:"Please submit a valid e-mail address!",emaillong:"Please submit a shorter e-mail address! (Max 64 chars)",country:"Please submit a valid country!",emailexists:"This e-mail address is already in use!",server:"You managed to bug the server, congrats!",badwordsname:"Please don't use nasty words in your name!",badwordsmessage:"Please don't use nasty words in your message!"};var resultsLink=document.getElementById("r");resultsLink.href="";resultsLink.onclick=function(event){event.preventDefault();user.name=null;showResults(false)};var backToTopLink=document.getElementById("t");backToTopLink.href="";backToTopLink.onclick=function(event){event.preventDefault();smoothScrollTo(0)};var solutionLink=document.getElementById("sl");solutionLink.href="";solutionLink.onclick=function(event){event.preventDefault();smoothScrollTo(ref.formContainer.offsetTop)}}function submitForm(){var form=document.getElementById("f");var errorContainer=document.getElementById("err");errorContainer.innerHTML="";var name=form.elements["n"].value;var email=form.elements["e"].value;var country=form.elements["c"].value;var message=form.elements["m"].value;var data="a=1&n="+name+"&e="+email;if(country)data+="&c="+country;if(message)data+="&m="+message;var atPos=email.lastIndexOf("@");var dotPos=email.lastIndexOf(".");if(atPos==-1||dotPos==-1||dotPos<atPos){displayFormErrors(["email"]);form.elements["e"].focus();form.elements["e"].select();return}var method="POST";var headers={};headers["Content-type"]="application/x-www-form-urlencoded";form.elements["s"].disabled=true;form.elements["m"].focus();load("s/s.php",function(response){user.name=name?name.trim():name;showResults(true)},{method:method,data:data,headers:headers},function(response){form.elements["s"].disabled=false;if(this.status==400&&response){response=response.split(",")}else{response=["server"]}displayFormErrors(response)})}function displayFormErrors(errors){var errorContainer=document.getElementById("err");errorContainer.innerHTML="";errorContainer.style.opacity=0;for(var i=0;i<errors.length;i++){var errorTag=document.createElement("h4");errorTag.textContent=errorTypes[errors[i]];errorContainer.appendChild(errorTag)}setTimeout(function(){errorContainer.style.opacity=1},at(25))}function enhanceCountryOptions(){loadCountries(function(countries){loadCss("select.css");var form=document.getElementById("f");var countryInput=document.getElementById("c");var select=document.createElement("select");select.id="c";select.name="c";form.insertBefore(select,countryInput);for(var i=0;i<countries.length;i++){var option=document.createElement("option");option.value=countries[i];option.text=countries[i];select.appendChild(option)}form.removeChild(countryInput)})}function loadCountries(onComplete){load("s/countries.txt",function(response){onComplete.call(this,response.split("\n"))})}function extendStyles(onComplete){if(extended)return;extended=true;loadCss("e.css",function(){if(onComplete)onComplete()})}function getCommonReferences(){ref.backToTop=document.body.children[0];ref.animationContainer=document.body.children[1];ref.solutionContainer=document.body.children[2];ref.formContainer=document.body.children[3];ref.footer=document.body.children[4];ref.water=ref.animationContainer.children[1].children[0];ref.waterBackground=ref.water.children[0];ref.paragraphContainer=ref.water.children[2]}function at(timeout){if(animatable)return timeout;else return 0}var scrollInterval=null;var scrollDirection;var scrollComplete;function smoothScrollTo(position,onComplete){if(position==getScrollY())return;clearInterval(scrollInterval);var scrollStep=20;var scrollTimeout=10;scrollComplete=onComplete scrollDirection=position>getScrollY()?1:-1;lastScrollY=getScrollY();scrollInterval=setInterval(function(){if(scrollDirection==1){if((getScrollY()+window.innerHeight)>=document.body.clientHeight){clearInterval(scrollInterval)}else{window.scrollTo(0,getScrollY()+scrollStep)}if(scrollStep>1&&(position-getScrollY())<205){scrollStep--}if(getScrollY()>=position){window.scrollTo(0,position);clearInterval(scrollInterval);scrollInterval=null;if(scrollComplete)scrollComplete.call(this)}}else{if(getScrollY()==0){clearInterval(scrollInterval)}else{window.scrollTo(0,getScrollY()-scrollStep)}if(scrollStep>1&&(getScrollY()-position)<205){scrollStep--}if(getScrollY()<=position){window.scrollTo(0,position);clearInterval(scrollInterval);scrollInterval=null;if(scrollComplete)scrollComplete.call(this)}}},scrollTimeout)}var scrollYSupport=null;function getScrollY(){if(scrollYSupport==null){if(typeof window.scrollY!=="undefined"){scrollYSupport=true}else{scrollYSupport=false}}else if(scrollYSupport){return window.scrollY}else{return document.documentElement.scrollTop}}var lastScrollY=getScrollY();window.addEventListener("scroll",function(e){if(scrollInterval==null)return;var scrollY=getScrollY();if(scrollY>lastScrollY){if(scrollDirection==-1){clearInterval(scrollInterval);scrollInterval=null;if(scrollComplete)scrollComplete.call(this)}}else if(scrollY<lastScrollY){if(scrollDirection==1){clearInterval(scrollInterval);scrollInterval=null;if(scrollComplete)scrollComplete.call(this)}}lastScrollY=getScrollY()});function isAnimatable(){domPrefixes="Webkit Moz O ms Khtml".split(" "),elm=document.createElement("div");if(elm.style.animationName!==undefined){return true}for(var i=0;i<domPrefixes.length;i++){if(elm.style[domPrefixes[i]+"AnimationName"]!==undefined){return true}}return false}function loadCss(url,onComplete){var l=document.createElement("link");l.type="text/css";l.rel="stylesheet";l.href=url+(nocache?((url.indexOf("?")==-1?"?":"&")+Date.now()):"");l.media="gohungary";var loaded=false;l.onload=function(){this.media="all";if(!loaded&&onComplete)onComplete();loaded=true};document.getElementsByTagName("head")[0].appendChild(l);setTimeout(function(){if(!loaded)onComplete(null,true)},2500)}function loadScript(url,onComplete){var s=document.createElement("script");s.type="text/javascript";s.src=url+(nocache?((url.indexOf("?")==-1?"?":"&")+Date.now()):"");s.async=true;s.defer=true;var loaded=false;s.onload=function(){if(!loaded&&onComplete)onComplete();loaded=true};document.getElementsByTagName("head")[0].appendChild(s);setTimeout(function(){if(!loaded)onComplete(null,true)},2500)}function load(url,onComplete,options,onError){options=options?options:{};options.method=options.method?options.method:"GET";options.data=options.data?options.data:undefined;var xhttp;if(window.XMLHttpRequest){xhttp=new XMLHttpRequest()}else{xhttp=new ActiveXObject("Microsoft.XMLHTTP")}xhttp.onreadystatechange=function(){if(this.readyState==4){if(this.status==200)onComplete.call(this,this.responseText);else if(onError)onError.call(this,this.responseText)}};if(nocache){url+=(url.indexOf("?")==-1?"?":"&")+Date.now()}xhttp.open(options.method,url,true);if(options.headers){for(var h in options.headers){xhttp.setRequestHeader(h,options.headers[h])}}xhttp.send(options.data)}var initTriesLeft=5;var initInterval=setInterval(function(){initTriesLeft--;if(initialized||!initTriesLeft){clearInterval(initInterval)}else if(window.init){init()}},250);