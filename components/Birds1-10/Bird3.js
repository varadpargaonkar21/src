function Bird3(){

    function AE(){

        document.getElementById('ci1').style.transform = 'rotate(360deg)';
        document.getElementById('ci1').style.height = '900px';
        document.getElementById('ci1').style.width = '1400px'

    }

    return (

     <>
     <img id="ci1" onClick={AE} src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/AmericanGoldfinch_MattWilliams_4000x2200.jpg?crop=0%2C0%2C4000%2C2200&wid=4000&hei=2200&scl=1.0" alt=""/>
     </>

    );

}

export default Bird3;