function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
   // Get all elements with class="tabcontent" and hide them
  defaultpage = document.getElementsByClassName("main-body1");
  for (i = 0; i < defaultpage.length; i++) {
    defaultpage[i].style.display = "none";
  }
  
  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}


// adds the shadow under the navigation bar
$(window).scroll(function() {
  // If scrolled past threshold
    if ($(window).scrollTop() > 10) {
      // Add class to nav
        $('#tab').addClass('mini-nav');
        $('.tablinks').addClass('tablinks-mini');
        $('.header').addClass('header-mini');
    } else { // If user scrolls back to top
      // remove it
        $('#tab').removeClass('mini-nav');
        $('.tablinks').removeClass('tablinks-mini');
        $('.header').addClass('header-mini');
    }
});


window.onload=function(){
    openTab(event, 'Home');
};

