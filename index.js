


window.fbAsyncInit = function() {
  FB.init({
    appId: '1103333643516955',
    autoLogAppEvents: true,
    xfbml: true,
    version: 'v9.0'
  });
};  

const title = document.getElementById('title')
function handle(response){
  title.innerHTML = 'shared'
}
function handleClick() {
  FB.ui(
    {
      method: 'share',
      display: 'popup',
      href: `https://google.com`
    },
    function(response) {
      if (response && !response.error_message) {
        title.innerHTML = 'shared'
      }
      else{
        console.log(response);
      }
    }
  );
}