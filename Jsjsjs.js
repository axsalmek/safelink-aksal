  

                window.reCaptchaCallback = function reCaptchaCallback() {
                  $(&#39;#download1&#39;).removeAttr(&#39;disabled&#39;);
                  //JS code
                  //document.getElementById(&quot;download1&quot;).disabled = false;
                };


            window.reCaptchaExpired = function reCaptchaExpired() {
                  $(&#39;#download1&#39;).attr(&#39;disabled&#39;, &#39;true&#39;);
                  //JS CODE
                  //document.getElementById(&quot;download1&quot;).disabled = true;
                };


  document.getElementById(&quot;download1&quot;).disabled = true;

 function enableBtn(){
    document.getElementById(&quot;download1&quot;).disabled = true;
   }
var captchaContainer = null;
var loadCaptcha = function() {
  captchaContainer = grecaptcha.render(&#39;captcha_container&#39;, {
	&#39;sitekey&#39; : &#39;6Lf0GxIaAAAAADG2Du9Rl5mK9cWC2ARdnyUc3r8T&#39;,
	&#39;callback&#39; : function(response)
	{
	  // console.log(response);
	  document.getElementById(&#39;download1&#39;).disabled = false;
	}
  });
};
