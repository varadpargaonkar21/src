function Flower4(){

    function AllEffects(){

        document.getElementById('ci1').style.transform = 'rotate(360deg)';
        document.getElementById('ci1').style.height = '900px';
        document.getElementById('ci1').style.width = '1400px'

    }

    return (
              <>
              
              <img id="ci1" onClick={AllEffects} src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg" alt=""/>
              
              </>

    );


}

export default Flower4;

