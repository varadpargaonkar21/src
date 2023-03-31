function Bird2(){

    function AE(){

        document.getElementById('ci1').style.transform = 'rotate(360deg)';
        document.getElementById('ci1').style.height = '900px';
        document.getElementById('ci1').style.width = '1400px'

    }


    return(


        <>
        <img id="ci1" onClick={AE} src="https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453__340.jpg" alt=""/>
        </>
    );
}

export default Bird2;