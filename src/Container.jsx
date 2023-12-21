import { Cards } from "./components/Cards"
import { Header } from "./components/Header"
import { SpotifyComponent } from "./components/SpotifyComponent"
import { ThirdSection } from "./components/ThirdSection"


export const Container = () => {
    return (
        <>
            <Header />
            <SpotifyComponent />
            <ThirdSection />
            <Cards />
        </>
    )
}
