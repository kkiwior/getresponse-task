import {useCallback} from "react";
import {useLocalStorage} from "../../../hooks/useLocalStorage";

interface IProteinProps {
    name: string;
    selected: string[];
    notSelected: string[];
}

function Protein({name, selected, notSelected}: IProteinProps) {
    const [toggle, setToggle] = useLocalStorage(name, false);

    const toggleProtein = useCallback(() => setToggle(!toggle), [toggle, setToggle]);

    return (
        <div onClick={toggleProtein}>
            <picture onClick={toggleProtein}>
                <source srcSet={toggle ? selected[1] : notSelected[1]} type="image/webp"/>
                <img src={toggle ? selected[0] : notSelected[0]} title={name} alt={name}/>
            </picture>
        </div>
    );
}

export {Protein}