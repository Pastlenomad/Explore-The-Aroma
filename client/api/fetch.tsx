export const fetchParfume = async () => {
    try{
    const res = await fetch('http://localhost:3001/');
    const data = await res.json();
    return data;
    }catch(e){
        console.log(e)
    }
}