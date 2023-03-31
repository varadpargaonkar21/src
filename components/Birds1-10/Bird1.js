import './Birds.css';
function Bird1(){

    function AE(){

        document.getElementById('ci1').style.transform = 'rotate(360deg)';
        document.getElementById('ci1').style.height = '900px';
        document.getElementById('ci1').style.width = '1400px'

    }

    return(


        <>
        <img id="ci1" onClick={AE} src="https://img.theweek.in/content/dam/week/news/sci-tech/images/2022/4/5/macaw-bird.jpg" alt=""/>
        </>
    );

}

export default Bird1;