chrome.browserAction.onClicked.addListener(function(tab) {
        chrome.tabs.executeScript({
          code: 
          	'var swp = new Boolean(true);'+
 			'document.body.addEventListener(\'keydown\', (event) => {'+
  				'const keyName = event.key;'+
  				'if(keyName==\'i\' || keyName==\'ш\' ){'+  
  					'var images = document.getElementsByTagName("img");'+
            		'for (var i = 0; i < images.length; i++){'+
            			'if(images[i].clientWidth > 175 && images[i].clientHeight > 175)'+
            				'if(!swp) images[i].style.visibility = "hidden";'+
            				'else images[i].style.visibility = "visible";'+
            		'}'+
            		'swp = (swp) ? false : true;'+
  				'}'+			
			'});'
        });
      });
