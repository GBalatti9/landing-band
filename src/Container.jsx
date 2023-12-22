import { Cards } from "./components/Cards"
import { Contact } from "./components/Contact"
import { Header } from "./components/Header"
import { ScrollToTop } from "./components/ScrollToTop"
import { SpotifyComponent } from "./components/SpotifyComponent"
import { ThirdSection } from "./components/ThirdSection"


export const Container = () => {
    return (
        <>
            <Header />
            <SpotifyComponent />
            <ThirdSection />
            <Cards />
            <Contact />
            <ScrollToTop />
        </>
    )
}
