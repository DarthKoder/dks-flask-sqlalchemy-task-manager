// Script for sidenav to initialize

document.addEventListener('DOMContentLoaded', function() {
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });



  // Script for date picker

  document.addEventListener('DOMContentLoaded', function() {
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
      format: "mmm dd, yyyy", 
      i18n: {done: "Select"}
    });
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.datepicker').datepicker();
  });



  // Script for selects

  
  document.addEventListener('DOMContentLoaded', function() {
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('select').formSelect();
  });