import logo from '../../../images/logo/로고.png';
import css from '../../../css/style.scss'

function Header(){
    return(
        <header>
            <div class='header-wrap'>
                <img src={logo} alt="로고" />

                <p>오늘 뭐할까?</p>
            </div>
        </header>
    )
}


export default Header;