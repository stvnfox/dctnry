import { atom } from 'nanostores';
import { DictionaryService } from '../services/dictionary.service';

interface DictionaryLicense {
    name: string
    url: string
}

interface DictionaryMeaningDefinitions {
    definition: string
    synonyms: string[]
    antonyms: string[]
    example: string
}

export interface DictionaryMeaning {
    antonyms: string[]
    definitions: DictionaryMeaningDefinitions[]
    partOfSpeech: string
    synonyms: string[]
}

export interface DictionaryPhonetic {
    audio: string
    license: DictionaryLicense
    sourceUrl: string
    text: string
}

export interface DictionaryResult {
    license: DictionaryLicense
    meanings: DictionaryMeaning[]
    phonetic: string
    phonetics: DictionaryPhonetic[]
    sourceUrls: string[]
    word: string
    id?: string
}

export const DictionaryQuery = atom<string>('');

export const GetDictionaryResults = async (query: string) => {
    DictionaryQuery.set(query);

    const response: DictionaryResult[] = await DictionaryService.GetResults(query)

    if(response.length === 0) {
        return;
    }

    return response;
};

export const ClearDictionaryResults = () => {
    DictionaryQuery.set('');
    return []
};