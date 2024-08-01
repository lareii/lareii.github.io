import axios from 'axios';

const apiKey = 'e1cc64bf9ca73271984dfa67078e0257';
const user = 'molishu';

export const getRecentTracks = async () => {
    try {
        const response = await axios.get('https://ws.audioscrobbler.com/2.0/', {
            params: {
                method: 'user.getrecenttracks',
                user: user,
                api_key: apiKey,
                format: 'json',
                limit: 5,
            }
        });
        return response.data.recenttracks.track;
    } catch (error) {
        console.error('Error fetching recent tracks:', error);
        throw error;
    }
};