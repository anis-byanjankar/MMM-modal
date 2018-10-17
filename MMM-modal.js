
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
		return ["modal.css"]
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

		//codechange
	        var title = document.createElement("div");
                title.className = "bright medium regular fed";
                title.setAttribute("id","player");
		title.innerHTML = "Today's Video";
                title.addEventListener("click", () => showdesc(this)); //Show description on click
                wrapper.appendChild(title);
 
              	
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

                //below is the function to show description and hide title
                function showdesc(thisdesc) {
                      	
			source.setAttribute("src",links[Math.floor(Math.random()*links.length)]);
			video.autoplay=true;
			video.load();                       
 			description.style.display="";
			title.style.display="none";
            		console.log("SHOW"); 
		};
 
                 //and to close the description on click and get next title
                 function hidedesc(thisdesc) {
                  
			video.pause();                      	
			title.style.display="";
			description.style.display="none";
                       
            		console.log("HIDE"); 
		};

		//codechange end






		return wrapper;
	}
});
