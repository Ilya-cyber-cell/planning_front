import axios from "axios";
import {ref, onMounted} from 'vue';

export function useDict(dictionary) {
    const api_url="http://planning.local/api"
    const dictEntrys = ref([])
    const fetching = async () => {
        try {
            const response = await axios.get(api_url + '/dict/' +  dictionary ,{
                params: {
                }
            });
            dictEntrys.value = response.data;
        } catch (e) {
            alert('Ошибка'+ e)
        } finally {
//            isPostsLoading.value = false;
        }
    }
    onMounted(fetching)

    return {
        dictEntrys,
    }
}

