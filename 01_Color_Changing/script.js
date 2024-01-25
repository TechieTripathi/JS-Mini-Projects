    // generate a random color
    let color = ""
    
    if(color == ""){
      document.getElementById('color-code').style.display = 'none'
    }

    const randomColor = function () {
        const hex = "0123456789ABCDEF";
        color = "#";
        for (let i = 1; i <= 6; i++) {
          color += hex[Math.floor(Math.random() * 16)];
        }
        const colorCode = document.createTextNode(`${color}`)
        document.getElementById('color-code').appendChild(colorCode)
        return color;
      };
  

      let intervalId;

      const startChangingColor = function () {
        // checking the nullity of intervalID  -> we don't need to disable the start button at all
        if (!intervalId) {
          intervalId = setInterval(changeColor, 1000);
        }
        
        function changeColor() {
          document.body.style.backgroundColor = randomColor();
        }
        //   document.querySelector("#start").setAttribute("disabled", "");
      };
      
      const stopChangingColor = function () {
        clearTimeout(intervalId);
        // flushing out the value of intervalId rather than overwriting it
        intervalId = null;
        //   document.querySelector("#start").removeAttribute("disabled");
      };
      // start the interval
      document
        .querySelector("#start")
        .addEventListener("click", startChangingColor);
  
      // for clearing the interval
      document
        .querySelector("#stop")
        .addEventListener("click", stopChangingColor);