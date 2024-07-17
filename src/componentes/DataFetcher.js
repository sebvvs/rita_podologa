import React, { useEffect, useState } from "react";

const DataFetcher = () => {
    const [photos, setPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedClient, setSelectedClient] = useState(null);
    const ACCESS_KEY = 'vDIFGujxEjlqsSOSOrFW_30VX11J-Qpjyia_omMd7HY';

    const clients = [
        { id: 1, name: "María González" },
        { id: 2, name: "Ana López" },
        { id: 3, name: "Lucía Martínez" },
        { id: 4, name: "Sofía Rodríguez" },
        { id: 5, name: "Laura Gómez" },
        { id: 6, name: "Carmen Fernández" },
        { id: 7, name: "Isabel Sánchez" },
        { id: 8, name: "Elena Torres" },
    ];

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const response = await fetch(`https://api.unsplash.com/search/photos?query=feet&per_page=8`, {
                    headers: {
                        Authorization: `Client-ID ${ACCESS_KEY}`
                    }
                });
                const data = await response.json();
                const filteredPhotos = data.results.filter(photo => 
                    !photo.alt_description.toLowerCase().includes('shoes') && 
                    !photo.alt_description.toLowerCase().includes('zapatillas')
                );
                setPhotos(filteredPhotos);
                setIsLoading(false);
            } catch (error) {
                console.error("Error al obtener las fotos: ", error);
                setIsLoading(false);
            }
        };

        fetchPhotos();
    }, []);

    const handleClientChange = (e) => {
        const clientId = parseInt(e.target.value, 10);
        const client = clients.find(c => c.id === clientId);
        setSelectedClient(client);
    };

    return (
        <div>
            <h2>Atenciones realizadas</h2>
            {isLoading ? (
                <p>Cargando fotos...</p>
            ) : (
                <div>
                    <select onChange={handleClientChange} defaultValue="">
                        <option value="" disabled>Selecciona un cliente</option>
                        {clients.map((client) => (
                            <option key={client.id} value={client.id}>
                                {client.name}
                            </option>
                        ))}
                    </select>

                    {selectedClient && (
                        <div>
                            <h3>Cliente: {selectedClient.name}</h3>
                            {photos[selectedClient.id % photos.length] && (
                                <div className="responsive-image-container">
                                    <img src={photos[selectedClient.id % photos.length].urls.small} alt={`Foto para ${selectedClient.name}`} className="responsive-image" />
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default DataFetcher;
