
/* Magic Mirror
 * Module: Modal Video Box
 * 
 * v 1.0.0
 * 
 * By Awen https://
 * MIT Licensed.
 */
Module.register("MMM-modal", {
	defualts: {
		playlist: "",
	},
	/*getScripts:function(){
		return ["jquery-3.3.1.min.js"]
	},*/
	getStyles:function(){
		return ["modal.css","style.css"]
	},
	getDom: function () {
		var wrapper = document.createElement("div");
		var links=[	"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
				"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
				"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",	
			 	"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
				"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
				"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
				"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
				"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
			];
		var AudioLinks=[
				"http://localhost:8080/1.mp3",
				"http://localhost:8080/2.mp3",
				"http://localhost:8080/3.mp3",
				"http://localhost:8080/4.mp3",
				"http://localhost:8080/5.mp3",
				"http://localhost:8080/6.mp3",
				"http://localhost:8080/7.mp3",
				"http://localhost:8080/8.mp3",
				"http://localhost:8080/9.mp3",
			];


		//codechange
	        var media = document.createElement("div");
	        var videoC = document.createElement("div");
		videoC.innerHTML = "Today's Video";
		
		videoC.className = "thin medium  bright pre-line fed";
			
                videoC.addEventListener("click", () => showdesc(this)); //Show description on click
                media.appendChild(videoC);
		wrapper.appendChild(media);
 		
		//Control buttons.
		var controls = document.createElement("div");
		controls.className="controls fed";
		var play = document.createElement("span");
		var musicName = document.createElement("div");
		var next = document.createElement("span");
		var prev = document.createElement("span");
		var stop= document.createElement("span");
		
				
		play.className="icon-play3";
		//pause.className="icon-pause2";
		next.className="icon-next2";
		prev.className="icon-previous2";
		stop.className="icon-stop2";
		

		play.addEventListener("click", () => playM(this));  //Hide description on click
		//pause.addEventListener("click", () => pauseM(this));  //Hide description on click
		next.addEventListener("click", () => nextM(this));  //Hide description on click
		prev.addEventListener("click", () => prevM(this));  //Hide description on click
		stop.addEventListener("click", () => stopM(this));  //Hide description on click
	
		controls.appendChild(prev);
		controls.appendChild(play);
		//controls.appendChild(pause);
		controls.appendChild(next);
		//controls.appendChild(stop);
		media.appendChild(musicName);
		media.appendChild(controls);
		
			
              	
		description = document.createElement("div");
                description.className = "modalBox";
                description.setAttribute("id","modal-box");
                description.innerHTML = "";
		description.addEventListener("click", () => hidedesc(this));  //Hide description on click
		description.style.display="none";

		wrapper.appendChild(description);
		
		var video = document.createElement("video")
		var source = document.createElement('source');
		//var videoSource = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
		source.setAttribute("src",links[Math.floor(Math.random()*links.length)]);
		source.setAttribute("type","video/mp4")
		video.appendChild(source);
		description.appendChild(video);



		var audio = document.createElement("audio");
		var AudioSource = document.createElement('source');
		AudioSource.setAttribute("src",AudioLinks[Math.floor(Math.random()*AudioLinks.length)]);
		AudioSource.setAttribute("type","audio/mpeg");
		audio.appendChild(AudioSource);
		


                //below is the function to show description and hide title
                function showdesc(thisdesc) {
                      	
			source.setAttribute("src",links[Math.floor(Math.random()*links.length)]);
			video.autoplay=true;
			video.load();                       
 			description.style.display="";
			videoC.style.display="none";
            		console.log("SHOW"); 
		};
 
                 //and to close the description on click and get next title
                 function hidedesc(thisdesc) {
                  
			video.pause();                      	
			videoC.style.display="";
			description.style.display="none";
                       
            		console.log("HIDE"); 
		};

		//codechange end
		

		//Music Controls
		function playM(thisobj){
			musicName.innerHTML = /[^/]*$/.exec(AudioSource.src)[0];
			if(play.classList.contains('icon-play3')){
				audio.autoplay=true;
				audio.load();
				play.classList.remove('icon-play3');
				play.classList.add('icon-pause2');
			}
			else{
			
				play.classList.remove('icon-pause2');
				play.classList.add('icon-play3');
				audio.pause();
					
			}
			console.log("PLAY");
		};
		function pauseM(thisobj){
			musicName.innerHTML = "";
			audio.pause();
			console.log("PAUSE");
		};
		function stopM(thisobj){
			musicName.innerHTML = "";
			audio.pause();
			audio.currenttime=0;
			console.log("STOP");
		};
		function prevM(thisobj){
			
			musicName.innerHTML = /[^/]*$/.exec(AudioSource.src)[0];
			AudioSource.setAttribute("src",AudioLinks[Math.floor(Math.random()*AudioLinks.length)]);
			audio.load();
			console.log("PREV");
		};
		function nextM(thisobj){
			musicName.innerHTML = /[^/]*$/.exec(AudioSource.src)[0];
			console.log("Next");
			AudioSource.setAttribute("src",AudioLinks[Math.floor(Math.random()*AudioLinks.length)]);
			audio.load();
		};
		//Music Controls End



		return wrapper;
	}
});
