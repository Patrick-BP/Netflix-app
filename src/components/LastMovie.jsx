
function LastMovie() {
    return ( 
        <div className="movie-img">
            <img src="movie-img.png" alt="" />
            <div className="title">
                <h1>The Wolverine</h1>
                <p>
                The Wolverine is a 2013 superhero film featuring the Marvel Comics 
                character Wolverine. It is the sixth installment in the X-Men film series, 
                the second installment in the trilogy of Wolverine films after X-Men Origins
                </p>
                <br />
                <button >
                    <div className="d-flex">
                        <span class="material-symbols-outlined play">play_arrow</span>
                    <span> play</span>
                    </div>
                    
                    </button>
                <button>More Detail</button>
            </div>
        </div>
     );
}

export default LastMovie;