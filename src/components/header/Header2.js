import "./header.css"
export const Header = () => {
    return (
        <>
        <header className="header-bg">
            <div className="Header2Container">
                <div className="header-container">
                    <div className="Header2MainContainer">
                        <div className="logo-container">
                            <img src="/assets/icons/logo.svg" alt="logo"/>
                            <span>NORDEK</span>
                        </div>
                        <div className="Language-Container">
                            <img src="/assets/icons/language.svg" alt="language"/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}