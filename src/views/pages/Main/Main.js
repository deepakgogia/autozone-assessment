import React, { useEffect, useState } from 'react';
import { ITEM_TYPES, PAGE_PER_ITEM, PLANET_BASE_URL, USER_NOT_FOUND } from '../../../constant';
import { DropDown } from '../../components/Dropdown/Dropdown';
import Pagination from '../../components/Pagination/Pagination';
import TableView from '../../components/TableView/TableView';
import { Http } from '../../../utils/http';

/**
 * Main component for this application
 * @returns JSX.Element
 */
const Main = () => {
    const [planets, setPlanets] = useState([]);
    const [error, setError] = useState();
    const [selectedPlanet, setSelectedPlanet] = useState(null);
    const [people, setPeople] = useState([]);
    const [isPaginationVisible, setPaginationVisible] = useState(false);
    const [page, setPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        fetchApi(PLANET_BASE_URL);
    }, [])

    const handleChange = ({ target: { value } }) => {
        setSelectedPlanet(value);
        setPeople([]);
        getPeopleData(value);
    }

    const getPeopleData = (planetName = "") => {
        setPaginationVisible(false);
        const residents = planets.find((planet) => planet.name === planetName)?.residents;
        if (residents?.length > 0) {
            if (residents.length > PAGE_PER_ITEM) {
                setPaginationVisible(true);
            }
            for (let index = 0; index < residents.length; index++) {
                fetchApi(residents[index], ITEM_TYPES.PEOPLE);
            }
        } else {
            setPeople([]);
        }
    }

    const fetchApi = (url, fetchType = ITEM_TYPES.PLANET) => {
        Http.get(url)
            .then((res) => {
                const { success, data, error } = res;
                if (success) {
                    if (fetchType === ITEM_TYPES.PLANET) {
                        setPlanets((oldData) => [...oldData, ...data.results]);
                        if (data.next) {
                            fetchApi(data.next)
                        }
                    } else if (fetchType === ITEM_TYPES.PEOPLE) {
                        setPeople((oldData) => [...oldData, data])
                    }
                } else {
                    setError(error);
                }
            });
    }

    const handlePaginationChange = (e, value) => {
        setPage(value);
        setCurrentPage(PAGE_PER_ITEM * (value - 1));
    }

    return (
        <div className="Main">
            <DropDown
                onChange={handleChange}
                list={planets}
                selectedItem={selectedPlanet}
            />
            {selectedPlanet !== null && people.length === 0 &&
                <div className='Main__UsernotFound'>
                    {USER_NOT_FOUND}
                </div>
            }
            {people.length > 0 &&
                <TableView
                    list={people}
                    page={page}
                    currentIndex={currentPage}
                />
            }
            {isPaginationVisible &&
                <Pagination
                    count={people.length}
                    page={page}
                    onChange={handlePaginationChange}
                />
            }
        </div>
    );
}

export default Main;