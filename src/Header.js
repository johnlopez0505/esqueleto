const Header = ({size,color})=>{
    return (
        <div className="cabecera">
            <h1 style={{fontSize: size, color: color}}>Este es mi cabecera</h1>
        </div>
        
    );
}

export default Header;