function Flower9(){

    function AllEffects(){

        document.getElementById('ci1').style.transform = 'rotate(360deg)';
        document.getElementById('ci1').style.height = '900px';
        document.getElementById('ci1').style.width = '1400px'

    }

    return(

                 <>
                 
                 <img id="ci1" onClick={AllEffects} src="https://www.thespruce.com/thmb/XbWx6ggQWMpvrVJJ8f0ea8amGp0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/best-fragrant-flowers-4147679-hero-5b03e1a9d8d94d5f83d170c215051adc.jpg" alt=""/>

                 </>

    );

}


export default Flower9;