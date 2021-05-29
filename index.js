const year = new Date().getFullYear() + 1;
let bday = new Date(year, 4, 28, 23, 59, 59).getTime();
console.log(bday);

// countdown
let timer = setInterval(function () {

  // get today's date
  const today = new Date().getTime();
  var tod = new Date();
  var dd = tod.getDate();

  // get the difference
  const diff = bday - today;

  // math
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // display
  document.getElementById("timer").innerHTML =
    "<div class=\"days\"> \
  <div class=\"numbers\">" + days + "</div>days</div> \
  <div class=\"hours\"> \
  <div class=\"numbers\">" + hours + "</div>hours</div> \
  <div class=\"minutes\"> \
  <div class=\"numbers\">" + minutes + "</div>minutes</div> \
  <div class=\"seconds\"> \
  <div class=\"numbers\">" + seconds + "</div>seconds</div> \
  </div>";

  //after the counting ends
  if ((days + hours + minutes + seconds == 0) || (dd == 29)){
    console.log('fuck')
    clearInterval(timer);
    document.getElementsByClassName('fade')[0].style.opacity = '0';
    document.getElementsByClassName('fade')[1].style.opacity = '0';
    document.getElementsByClassName('fade')[2].style.opacity = '0';

    setTimeout(function () {
      document.getElementsByClassName('containerr')[0].innerHTML = '';
      document.getElementsByClassName('wrapper')[0].remove();
      document.getElementsByTagName('footer')[0].remove();
      document.getElementsByClassName('lights')[0].style.height = '119';
      var btn = document.createElement("BUTTON");
      btn.innerHTML = "Turn on lights";
      btn.classList.add('faded')
      btn.classList.add('action-button')
      btn.classList.add('shadow')
      btn.classList.add('animate')
      btn.classList.add('color')
      document.getElementsByClassName('containerr')[0].appendChild(btn);

      butt = [
        function light() {
          document.getElementsByClassName('lightrope')[0].style.visibility = 'visible';
          document.getElementsByTagName('body')[0].style.background = '#FFDAB9';
          document.getElementsByClassName('faded')[0].style.opacity = '0';
          setTimeout(function () {
            btn.innerHTML = "play music";
            document.getElementsByClassName('faded')[0].style.opacity = '1';
          }, 2000)
        },

        function music() {
          document.getElementsByClassName('song')[0].play();
          document.getElementsByClassName('faded')[0].style.opacity = '0';
          setTimeout(function () {
            btn.innerHTML = "let's decorate";
            document.getElementsByClassName('faded')[0].style.opacity = '1';
          }, 100)
        },

        function decorate() {
          document.getElementsByClassName('faded')[0].style.opacity = '0';
          setTimeout(function () {
            document.getElementsByClassName('banner')[0].style.visibility = 'visible';
            document.getElementsByClassName('fade')[0].style.opacity = '1';
            document.getElementsByClassName('faded')[0].style.opacity = '1';
            btn.innerHTML = "most delicious cake ever";
          }, 800)
        },

        function cake() {
          document.getElementsByClassName('faded')[0].style.opacity = '0';
          document.getElementsByClassName('containerr')[0].remove();
          document.getElementsByClassName('wrap')[0].style.display = 'inline';
          document.getElementsByClassName('wrap')[0].style.opacity = '0';
          document.getElementsByClassName('wrap')[0].style.visibility = 'visible';
          document.getElementsByClassName('wrap')[0].style.opacity = '1';
          
          setTimeout(function () {
            btn.innerHTML = "happy birthday";
            // document.getElementsByClassName('faded')[0].style.opacity = '1';   
          }, 800)
        },

        function msg() {
          setTimeout(function () {
            btn.innerHTML = "let's decorate";
            document.getElementsByClassName('faded')[0].style.opacity = '1';
          }, 800)
        }
      ]

      i = 0;
      document.getElementsByTagName('button')[0].addEventListener("click", function () {
        butt[i]();
        console.log(i)
        i++
      })
    }, 1000);

  }
}, 1000);




function setime() {
  today = new Date().getTime();
  bday = today + 2000

}
//setime();
