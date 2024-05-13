import './NavBorde.css'
function NavBorde(){
    return(
        <div className="menuBorde">
            <ul className='itemBorde'>
            <li className='liBorde'><a href="#"><img src="./public/img/iconos/home2.png" alt="" /></a></li>
                <li className='liBorde'><a href="/calendario"><img src="./public/img/iconos/calendario2.png" alt="" /></a></li>
                <li className='liBorde'><a href="/galeria"><img src="./public/img/iconos/galeria.png" alt="" /></a></li>
                <li className='liBorde'><a href="/soynuevo"><img src="./public/img/iconos/soynuevo2.png" alt="" /></a></li>
            </ul>
        </div>
    )
}
export default NavBorde;