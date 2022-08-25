import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <h1>
                <Link to="/"> 게시판 nav </Link>
            </h1>

            <div className="menu">
                <Link to="/create_word" className="link">
                    게시글 작성
                </Link>
            </div>
        </div>
    );
}

export default Header;