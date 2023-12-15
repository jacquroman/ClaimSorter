import {useState} from "react";

const Filter = ({results, setResults}) => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        filterResults();
    }

    const filterResults = () => {

        const filteredResults = [];

        for(const result of results){
            const recallReason = result.reason_for_recall;
            if(recallReason.includes(searchTerm)){
                filteredResults.push(result);
            }
        }
        setResults(filteredResults);
    }


    return(
        <div className ="filter">
            <label>Filter: </label>
            <input type="text" name="filter" value={searchTerm} onChange={handleChange}/>
        </div>
    )
}

export default Filter;