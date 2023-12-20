import './SpotifyComponent.css';

export const SpotifyComponent = () => {
    return (
        <div>

            <div className='spotify-component-container'>
                <iframe
                    className='spotify-profile'
                    src="https://open.spotify.com/embed/artist/51ZbPAMGcnqKUBRzaIcURC?utm_source=generator&theme=0"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    )
}
