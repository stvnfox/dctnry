import { DictionaryRepository } from "../repositories/dictionary.repository"

export const DictionaryService = {
    GetResults: async (query: string) => {
        const response = await DictionaryRepository.GetResults(query);

        return response
    }
}