(function () {
  'use strict';
  const select = document.getElementById('privacy-language');
  if (!select) return;
  select.addEventListener('change', function () {
    window.location.assign(select.value + (window.location.hash || ''));
  });
}());
