import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

const SharedLayout = ({children}) => {
    return(
        <div>
            <header>
                <NavigationBar/>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}
export default SharedLayout;