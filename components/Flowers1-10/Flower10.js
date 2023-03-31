function Flower10(){

    function AllEffects(){

        document.getElementById('ci1').style.transform = 'rotate(360deg)';
        document.getElementById('ci1').style.height = '900px';
        document.getElementById('ci1').style.width = '1400px'

    }

    return(

           <>
           
           <img id="ci1" onClick={AllEffects} src="https://media.newyorker.com/photos/6095a6b1d9c1b4ec8a8eb8da/master/w_2560%2Cc_limit/Stevens-FlowersOKeeffe.jpg" alt=""/>
           
           </>

    );

}

export default Flower10;