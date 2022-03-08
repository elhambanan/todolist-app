import Select from "react-select";

const NavBar = ({unCompletedTodos, onChange,selectedOption}) => {
    const options = [
        {value: "All", label: "All"},
        {value: "Completed", label: "Completed"},
        {value: "Uncompleted", label: "Uncompleted"},
    ]
   


    if(!unCompletedTodos) return <h2>set today todos !</h2>
    return ( 
        <header>
            <span>{unCompletedTodos}</span><h2>todos remaining</h2>
            <Select 
                value={selectedOption}
                onChange={onChange}
                options={options}
                className="select"
            />
             
            {/* <select onChange={onSelect} value={status}>
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Uncompleted">Uncompleted</option>
            </select>   */}
        </header>
     );
}
 
export default NavBar;