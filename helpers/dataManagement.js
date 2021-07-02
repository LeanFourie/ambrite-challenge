export const fetchDataFromAPI = async ( endpoint ) => {
    // Set base URL
    const baseURL = 'https://ambrite.ch/challenge/'

    // Fetch from API
    const res = await fetch(`${ baseURL }${ endpoint }`)

    // Get data from res
    const data = await res.json()

    // Return the fetched data
    return data
}
