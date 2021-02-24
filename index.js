window.fbAsyncInit = function () {
  FB.init({
    appId: '1103333643516955',
    autoLogAppEvents: true,
    xfbml: true,
    version: 'v9.0',
  });
};

const title = document.getElementById('title');
function handle(response) {
  title.innerHTML = 'shared';
}
function handleClick() {
  FB.ui(
    {
      method: 'share_open_graph',
      action_type: 'og.shares',
      action_properties: JSON.stringify({
        object: 'http://www.heppiface.com/doodles/',
      }),
    },
    function (response) {
      if (response && !response.error_message) {
        alert('Posting completed.');
      } else {
        alert('Error while posting.');
      }
    },
  );
}
