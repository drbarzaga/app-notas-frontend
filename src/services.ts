const API_URL = 'http://localhost:3000'

// Get notes from API
export async function getApiNotes() {
    try {
        const response = await fetch(`${API_URL}/api/notes`)
        const data = await response.json()
        return data;
    }catch(error) {
        console.error(error)
    }
}