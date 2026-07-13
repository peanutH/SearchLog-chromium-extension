export async function tab_exists(tab_id) {
    try {
        await chrome.tabs.get(tab_id);
        return true;
    } catch (e) {
        return false;
    }
}