
export default function Menu() {
    return (
        <div className="menu">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">TV Shows</a></li>
                <li><a href="#">Movies</a></li>
                <li><a href="#">New & Popular</a></li>
                <li><a href="#">My List</a></li>
                <li><a href="#">Browse by languages</a></li>
            </ul>
            <div className="search">
                <input type="text" />
                <span class="material-symbols-outlined search-icon">
                    search
                </span>
            </div>

        </div>
    )
}