import { QuickSort } from "../../functions/quicksort";

const SortedBedrooms = ({houses}) => {

    let unsortedBedrooms = [];
    let sortedBedrooms = [];

    if (houses) {
        houses.forEach(houses => {
            unsortedBedrooms.push(houses.price);
            console.log(unsortedBedrooms);
        });
        sortedBedrooms = QuickSort(unsortedBedrooms);
        console.log(sortedBedrooms);
    }

    return (
        <div>
            <h2>unsortedBedrooms</h2>
                <ul>
                    {unsortedBedrooms.map(house => <li> Price: {house}</li>)}
                </ul>
            <h2>sortedBedrooms</h2>
                <ul>
                    {sortedBedrooms.map(house => <li> Price:{house}</li>)}
                </ul>
        </div>
    );
}

export default SortedBedrooms;