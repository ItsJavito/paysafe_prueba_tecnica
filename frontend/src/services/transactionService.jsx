export const fetchTransactionsByFilters = async (filters) => {
    try {
        const query = new URLSearchParams(filters).toString();
        const response = await fetch(`http://localhost:5000/api/transactions/filter?${query}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching transactions:', error);
        throw error;
    }
};
