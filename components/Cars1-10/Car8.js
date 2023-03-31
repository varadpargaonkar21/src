function Car8(){


    function AllEffects(){

        document.getElementById('ci1').style.transform = 'rotate(360deg)';
        document.getElementById('ci1').style.height = '900px';
        document.getElementById('ci1').style.width = '1400px'

    }

    return (
             <>
             
             <img id="ci1" onClick={AllEffects} src="https://cdn.luxe.digital/media/20230105073805/fastest-cars-world-2023-list-ranking-luxe-digital.jpg" alt=""/>
             
             </>


    );

}


export default Car8;