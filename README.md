# RedditBadgeJs
Create a RedditBadge showing off your karma with this javascript library

Either call RedditBadge.BuildBadge(CanvasElement,RedditUsername);
OR 
Create a canvas element with the data-RedditBadgeUser tag and call RedditBadge.LoadPagesBadges();

---
#e.g
```
<body>
	<Canvas id="RedditBadge"></canvas>
	<Canvas data-RedditBadgeUser="MrLuxan"></canvas>

	<script src="RedditBadge.js"></script>
	<script>
		window.addEventListener("load", function() {
  			RedditBadge.LoadPagesBadges();
  			RedditBadge.BuildBadge(document.getElementById("RedditBadge"),"MrLuxan")
		});
	</script>
</body>
```
 
---
Dont want to bother with the library , just want the image ? use [RedditBadge](https://github.com/MrLuxan/RedditBadge)
