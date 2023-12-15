import axios from  "axios";

export const fetchData = async () => {
    try{
        const response = await axios.get("https://gist.githubusercontent.com/ng/3e3fd011e0042ecdd2bb7831c0e32efc/raw/80904389d6e714f189cfa82b5e41cfac8afd5e0b/resp.json");

        if(!response.ok){
            console.log("HTTP error!");
        }
        console.log("this is your data", response.data);
        return response.data;
    }
    catch(error){
        console.log("Error!", error);
    }
}