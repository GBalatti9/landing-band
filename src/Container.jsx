import { Header } from "./components/Header"
import { ImageGallery } from "./components/ImageGallery"
import { SpotifyComponent } from "./components/SpotifyComponent"


export const Container = () => {
    return (
        <>
            <Header />
            <SpotifyComponent />
            <ImageGallery />
        </>
    )
}
