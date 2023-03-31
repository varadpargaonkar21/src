function Bird7(){

    function AE(){

        document.getElementById('ci1').style.transform = 'rotate(360deg)';
        document.getElementById('ci1').style.height = '900px';
        document.getElementById('ci1').style.width = '1400px'

    }

    return (


        <>
        <img id="ci1" onClick={AE} src="https://cdn.pixabay.com/photo/2017/07/18/18/24/dove-2516641__340.jpg" alt=""/>
        </>
    )
}

export default Bird7;