import React from "react";

const Pagination = ({ data, dataSlice, totalPage, paginationPage }) => {
    let dot = [];
    let count = 0;
    for (let i = 1; i <= Math.ceil(data.length / totalPage); i++) {
        dot.push(i);
        count++;
    }
    return (
        <>
            <div className="pagination">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        {dot.map((element, index) => {
                            return (
                                <li key={element.id}
                                    class="page-item"
                                    onClick={() => paginationPage(element)}>
                                    <a class="page-link" href="#">
                                        {element}
                                    </a>
                                </li>
                            );
                        })}

                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Pagination;
