const body = document.querySelector('body');



async function getData(name) {
    const url = new URL(`http://localhost:3000/test/${name}`);

    try { 
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error.message);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const data = await getData('Mark');
    const p = document.createElement('p');
    p.textContent = data?.message;
    body.appendChild(p);
});
