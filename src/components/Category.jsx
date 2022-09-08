import MovieThumbNail from './MovieThumbNail';

export default function Category(){
    return(
        <div className='category-wpr'>
            <h4>Category Name</h4>
            <div className='cat-movie'>
                <MovieThumbNail />
                <MovieThumbNail />
                <MovieThumbNail />
                <MovieThumbNail />
            </div>
        </div>
    )

}