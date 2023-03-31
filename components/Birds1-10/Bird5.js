function Bird5(){

    function AE(){

        document.getElementById('ci1').style.transform = 'rotate(360deg)';
        document.getElementById('ci1').style.height = '900px';
        document.getElementById('ci1').style.width = '1400px'

    }

    return (


        <>
        <img id="ci1" onClick={AE} src="https://thumbs.dreamstime.com/b/bali-mynah-birds-19173506.jpg" alt=""/>
        </>
    )
}

export default Bird5;