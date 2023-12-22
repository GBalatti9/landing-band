import { Cards } from "./components/Cards"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { ScrollToTop } from "./components/ScrollToTop"
import { SpotifyComponent } from "./components/SpotifyComponent"
import { ThirdSection } from "./components/ThirdSection"
import { useForm } from "./hooks/useForm"


export const Container = () => {

    const { state, handleInput, reset } = useForm();
    return (
        <>
            <Header />
            <SpotifyComponent />
            <ThirdSection />
            <Cards />
            <Contact handleInput = { handleInput } reset = { reset } state = { state }/>
            <ScrollToTop />
            <Footer />
        </>
    )
}
