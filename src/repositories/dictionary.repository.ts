import { ofetch } from 'ofetch';
import { DictionaryResult } from '../store/dictionary.store';

export const DictionaryRepository = {
    GetResults: async (query: string): Promise<DictionaryResult[]> => {
        return await ofetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`, { 
            parseResponse: JSON.parse,
            ignoreResponseError: true,
        });
    }
}