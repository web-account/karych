  function openSubscription(evt, SubscriptionName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("subscription");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(SubscriptionName).style.display = "block";
  evt.currentTarget.className += " w3-shadow";
  }

  var mySidebar = document.getElementById("mySidebar");
  function amalri_open() {
  mySidebarLang.style.display = 'none';
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
  }
  }

  function amalri_openLang() {
  mySidebar.style.display = 'none';
  if (mySidebarLang.style.display === 'block') {
    mySidebarLang.style.display = 'none';
  } else {
    mySidebarLang.style.display = 'block';
  }
  }

  function w3_close() {
    mySidebar.style.display = "none";
  }

  function w3_closeLang() {
    mySidebarLang.style.display = "none";
  }

  var slideIndex = 1;
  showDivs(slideIndex);
  
  function plusDivs(n) {
    showDivs(slideIndex += n);
  }
  
  function currentDiv(n) {
    showDivs(slideIndex = n);
  }
  
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demodots");
    if (n > x.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" amalri-white", "");
    }
    x[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " amalri-white";
  }