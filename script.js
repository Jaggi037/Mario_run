score = 0;
button = true;
document.onkeydown = function(e){
    console.log("your key code is: ",e.keyCode);
    if(e.keyCode==32){
        mario = document.querySelector('.mario');  //select the first class encountered named mario
        //get element by ID will select the element via id in script
        mario.classList.add('animateMario'); // it will add a class in the html document
        setTimeout(() => {
            mario.classList.remove('animateMario')
        }, 900); 
     } // it is telling us that remove class named animateMario from the mario div.
        if(e.keyCode == 39){
            mario = document.querySelector('.mario');
            mariox = parseInt(window.getComputedStyle(mario,null).getPropertyValue('left'));
            console.log(mariox);
            mario.style.left = (mariox + 60) + "px";

        }
        if(e.keyCode == 37){
            mario = document.querySelector('.mario');
            mariox = parseInt(window.getComputedStyle(mario,null).getPropertyValue('left'));
            mario.style.left = (mariox - 60) + "px";
        }

    }


setInterval(() => {
    mario = document.querySelector('.mario');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    mx = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left')); //it is giving the value of style as a particular moment. during animation styles changes. we did parse int here because it will give us value in pexels.
    my = parseInt(window.getComputedStyle(mario, null).getPropertyValue('bottom'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('bottom'));
    
    offsetX = Math.abs(mx-ox);
    offsetY = Math.abs(my-oy); //it is giving us the absoule value of this subtraction.
    console.log(offsetX, offsetY);
    if(offsetX < 90 && offsetY < 220){
        gameOver.style.visibility = 'visible'; 
        obstacle.classList.remove('obstacleAni');
        button = false;
       }
    if(button){
        score = score + 1;
        scoreCont = document.querySelector('.scoreCont');
        scoreCont.innerHTML = "Your Score is: "+ score;
    }
}, 50);

