function Car3(){


    function AllEffects(){

        document.getElementById('ci1').style.transform = 'rotate(360deg)';
        document.getElementById('ci1').style.height = '900px';
        document.getElementById('ci1').style.width = '1400px'

    }

    return (
             <>
             
             <img id="ci1" onClick={AllEffects} src="https://i.ytimg.com/vi/tArC9-RHmU4/maxresdefault.jpg" alt=""/>
             
             </>


    );

}


export default Car3;