import React, {useState} from "react";
import './paginator.css';

const Paginator = React.memo(({ totalUsersCount, pageSize, setCurrentPage, currentPage, portionSize = 10 }) => {

    const [ portionNumber, setPortionNumber ] = useState(1);

    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const leftBorder = (portionNumber - 1) * portionSize + 1;
    const rightBorder = portionNumber * portionSize;

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) pages.push(i);
    return (
        <>
            { portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber-1)}>left</button>}
            <div className="numbers">
                { pages
                    .slice(leftBorder-1, rightBorder)
                    .map(p => {
                    return <span
                        onClick={() => setCurrentPage(p) }
                        className={ p === currentPage ? "selectedPage" : null }
                        key={p}>
                        {p}
                    </span>
                })}
            </div>
            { pagesCount > portionNumber*10-1 &&
                <button onClick={() => setPortionNumber(portionNumber+1)}>Right</button>}

        </>
    )
});

export default Paginator;