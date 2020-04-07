<script language="JavaScript">

var nl = getNewLine()

function getNewLine() {
	var agent = navigator.userAgent

	if (agent.indexOf("Win") >= 0)
		return "\r\n"
	else
		if (agent.indexOf("Mac") >= 0)
			return "\r"

 	return "\r"

}

pagecode = '<!--BEGIN QUALTRICS WEBSITE FEEDBACK SNIPPET-->'+nl+
	'<scr'+'ipt type=\'text/javascript\'>'+nl+
	'(function(){var g=function(e,h,f,g){'+nl+
	'this.get=function(a){for(var a=a+"=",c=document.cookie.split(";"),b=0,e=c.length;b<e;b++){for(var d=c[b];" "==d.charAt(0);)d=d.substring(1,d.length);if(0==d.indexOf(a))return d.substring(a.length,d.length)}return null};'+nl+
	'this.set=function(a,c){var b="",b=new Date;b.setTime(b.getTime()+6048E5);b="; expires="+b.toGMTString();document.cookie=a+"="+c+b+"; path=/; "};'+nl+
	'this.check=function(){var a=this.get(f);if(a)a=a.split(":");else if(100!=e)"v"==h&&(e=Math.random()>=e/100?0:100),a=[h,e,0],this.set(f,a.join(":"));else return!0;var c=a[1];if(100==c)return!0;switch(a[0]){case "v":return!1;case "r":return c=a[2]%Math.floor(100/c),a[2]++,this.set(f,a.join(":")),!c}return!0};'+nl+
	'this.go=function(){if(this.check()){var a=document.createElement("script");a.type="text/javascript";a.src=g;document.body&&document.body.appendChild(a)}};'+nl+
	'this.start=function(){var t=this;"complete"!==document.readyState?window.addEventListener?window.addEventListener("load",function(){t.go()},!1):window.attachEvent&&window.attachEvent("onload",function(){t.go()}):t.go()};};'+nl+
	'try{(new g(100,"r","QSI_S_ZN_9QxMOkeg94DUkh7","https://zn9qxmokeg94dukh7-training.siteintercept.qualtrics.com/SIE/?Q_ZID=ZN_9QxMOkeg94DUkh7")).start()}catch(i){}})();'+nl+
	'</scr'+'ipt><div id=\'ZN_9QxMOkeg94DUkh7\'><!--DO NOT REMOVE-CONTENTS PLACED HERE--></div>'+nl+
	'<!--END WEBSITE FEEDBACK SNIPPET-->'

document.write(pagecode);

</script>
