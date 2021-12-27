import axios from "axios";
import {ref, onMounted} from 'vue';

export function useServers(limit) {
    const servers = ref([])
    const fetching = async () => {
        try {
            const response = await axios.get('http://planning.local/apiemu/servers', {
                params: {
                    _page: 1,
                    _limit: limit
                }
            });
            servers.value = response.data;
        } catch (e) {
            alert('Ошибка'+ e)
        } finally {
//            isPostsLoading.value = false;
        }
    }
    onMounted(fetching)

    return {
        servers
    }
}

