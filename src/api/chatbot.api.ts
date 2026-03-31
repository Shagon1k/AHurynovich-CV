// TODO: Replace with actual API endpoint
const CHATBOT_API_URL = 'https://your-api-endpoint.com/chat';

export const sendChatMessage = async (message: string): Promise<string | null> => {
    try {
        const resp = await fetch(CHATBOT_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        });

        if (!resp.ok) {
            throw new Error(`HTTP error! status: ${resp.status}`);
        }

        const data = await resp.json();

        return data.message || null;
    } catch (e) {
        console.error('Error sending chat message', e);

        return null;
    }
};
