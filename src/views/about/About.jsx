import { useEffect, useState } from "react";

export default function About() {
    const [pageContent, setPageContent] = useState(null);
    const [mediaData, setMediaData] = useState(null);
    // Get image data
    const getImage = (id) => {
        const imgData = mediaData.find((img) => img.id === id);
        return imgData;
    }

    const fetchPageContent = async () => {
        try {
        const response = await fetch('http://localhost/blanca/wp-json/wp/v2/pages?slug=about');
        const data = await response.json();
        console.log("Response: ", response)
        console.log("Data: ", data)
        if (data.length > 0) {
            setPageContent(data[0]);  
        }
        } catch (error) {
        console.error('Error fetching page content:', error);
        }
    };

    const fetchMedia = async () => {
        try {
        const response = await fetch('http://localhost/blanca/wp-json/wp/v2/media');
        const data = await response.json();
        console.log("Media Data: ", data)
        return data.length > 0 ? setMediaData(data) : null;
        } catch (error) {
        console.error('Error fetching media:', error);
        }
    }

    useEffect(() => {
        fetchMedia();
        fetchPageContent();
    }, []);
    return <>
        {pageContent && mediaData && (
            <>
            {pageContent.acf && (
                <>
                <header> 
                    
                </header>
                
                <main>
                    
                </main>
                
                </>
            )}
            </>
        )}
    </>
}