
//For the Sticky Nav
window.addEventListener('scroll', function(){
    var header = document.querySelector('.navbar');
    header.classList.toggle("sticky", window.scrollY > 500);
  });


//For the Tab
  function openCity(evt, featureName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    document.getElementById(featureName).style.display = "block";
    evt.currentTarget.className += " active";
  }