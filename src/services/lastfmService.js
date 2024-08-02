import axios from 'axios';

const apiKey = import.meta.env.VITE_LASTFM_API_KEY || process.env.LASTFM_API_KEY;
const user = 'molishu';

export const getRecentTracks = async () => {
    try {
        const response = await axios.get('https://ws.audioscrobbler.com/2.0/', {
            params: {
                method: 'user.getrecenttracks',
                user: user,
                api_key: apiKey,
                format: 'json',
                limit: 20,
            }
        });
        return response.data.recenttracks.track;
    } catch (error) {
        console.error('Error fetching recent tracks:', error);
        throw error;
    }
};
