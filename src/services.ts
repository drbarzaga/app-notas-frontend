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

// Create Note
export async function createNote(payload: unknown) {
    try {
        const response = await fetch(`${API_URL}/api/notes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        const data = await response.json()
        console.log(data)
        return data;
    } catch (error) {
        console.error(error)
    }
}