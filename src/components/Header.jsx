import Menu from './Menu';
export default function Header() {
    return (

        <div className="header" >
            <div className="logo">
                <img src="/netflix-logo.png" />
            </div>
            <Menu />
            <div className="profile">
                <span className="material-symbols-outlined">
                    account_circle
                </span>
            </div>

        </div>

    )
}