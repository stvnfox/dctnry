import { ofetch } from 'ofetch';

export const DictionaryRepository = {
    GetResults: async (query: string) => {
        return await ofetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`, { parseResponse: JSON.parse});
    }
}