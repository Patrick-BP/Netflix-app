import MovieThumbNail from './MovieThumbNail';

export default function Category(){
    return(
        <div className=''>
            <h2>Category Name</h2>
            <div className='cat-movie'>
                <MovieThumbNail />
                <MovieThumbNail />
                <MovieThumbNail />
                <MovieThumbNail />
                <MovieThumbNail />
                <MovieThumbNail />
                <MovieThumbNail />
                <MovieThumbNail />
            </div>
        </div>
    )

}