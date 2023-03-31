import React from 'react';
import './Cars.css';


function Car1(){

    function AllEffects(){

        document.getElementById('ci1').style.transform = 'rotate(360deg)';
        document.getElementById('ci1').style.height = '900px';
        document.getElementById('ci1').style.width = '1400px'

        var Sound1 = document.getElementById('au1');
        Sound1.play();
    
    }

    return (
                  <>
                <img id='ci1' onClick={AllEffects} src="https://upload.wikimedia.org/wikipedia/commons/9/97/Lamborghini_Aventador_LP700-4_Orange.jpg" alt=""/>
                <audio id='au1' src='./sounds/nissan-leaf-106184.mp3'></audio>
                 </>

    );


}


export default Car1;