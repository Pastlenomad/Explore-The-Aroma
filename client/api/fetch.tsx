export const fetchParfume = async () => {
    try{
        console.log('arrive fetch')

    const res = await fetch('http://localhost:3001/');
    console.log('after fetch', res)
    const data = await res.json();
    console.log('response', data)
    return data;

    }catch(e){
        console.log(e)
    }
}