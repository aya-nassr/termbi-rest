import AppNav from "/src/shared/Navbar/Navbar";
import Footer from "/src/shared/Footer/Footer";


export function LayoutContainer({ children, withNavbar = true, withFooter = true }) {
    return (
        <>
            {withNavbar ? <AppNav /> : null}
            <main className="app-continer">
                {children}
            </main>
            {withFooter ? <Footer /> : null}
        </>
    )
}