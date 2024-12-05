async function queryAPI(URL) {
    try { 
        const response = await fetch(URL);
        if (!response.ok) { 
            throw new Error('Error Fetching Data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error Fetching Data');
        return null;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const form = $('.search-form')
    .submit(async (event) => {
        event.preventDefault();

        let URL = 'http://localhost:3000/checkUser/';
        const searchValue = document.getElementById('search-input').value;
        URL += searchValue;
    
        const data = await queryAPI(URL);
        
        if (data === null) {
            $('.notification').css('visibility', 'hidden');
        }
        $('.notification').text(data.message).css('visibility', 'visible');;
    })

});