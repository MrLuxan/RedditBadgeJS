var RedditBadge = (function() {

	let library = {};

	function GetRedditData(UserName,callBack)
  {
  	var xhttp = new XMLHttpRequest();
  	xhttp.onreadystatechange = function()
    {
    	if (this.readyState == 4 && this.status == 200)
      {
      	callBack(JSON.parse(this.responseText));       
    	}
  	};
  	xhttp.open('GET', 'https://www.reddit.com/user/'+UserName+'/about.json', true);
  	xhttp.send();
  }
  
  function CreateImage(Canvas,Jsondata)
  {
    Canvas.width = '202';
    Canvas.height = '77';

    let background = new Image();
    background.src = 'RedditBG.png';

    background.onload = function(){
      let context = Canvas.getContext('2d');    
      context.drawImage(background,0,0);    
      context.font = 'bold 11px Arial';  
      context.fillText(Jsondata.data.name,65,25);
      context.font = '11px Arial';
      context.fillText('Karma - ' + Jsondata.data.link_karma,65,40);
      context.fillText('Comment Karma - ' + Jsondata.data.comment_karma,65,55);
    }
  }

	library.BuildBadge = function(CanvasElement,UserName)
  {
    if(CanvasElement.nodeName == 'CANVAS')
    {
		  GetRedditData(UserName,function(data){
        CreateImage(CanvasElement,data);
      });
    }
  }

  library.LoadPagesBadges = function()
  {
    let badges = document.querySelectorAll('[data-RedditBadgeUser]');
    
    for (let badge of badges) {
      let userName = badge.getAttribute('data-RedditBadgeUser');
      library.BuildBadge(badge,userName);
    }
  }

  return library;
  
})();
