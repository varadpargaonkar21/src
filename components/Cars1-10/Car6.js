function Car6(){


    function AllEffects(){

        document.getElementById('ci1').style.transform = 'rotate(360deg)';
        document.getElementById('ci1').style.height = '900px';
        document.getElementById('ci1').style.width = '1400px'

    }

    return (
             <>
             
             <img id="ci1" onClick={AllEffects} src="https://i.ytimg.com/vi/dip_8dmrcaU/maxresdefault.jpg" alt=""/>
             
             </>


    );

}


export default Car6;