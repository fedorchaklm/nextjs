import {Metadata} from "next";
import CarsList from "@/components/cars-list/CarsList";

export const metadata: Metadata = {
    title: 'Cars page',
    description: 'Cars page description'
};

const CarsPage = async () => {
    // const todos = await fetch('http://localhost:3000/api').then(res => res.json());
    // console.log(todos);

    return (
        <>
            <CarsList/>
            {/*<div >*/}
                {/*{todos.map((todo: {title: string; id: number}) => <div key={todo.id}>{todo.title}</div>)}*/}
            {/*</div>*/}
        </>
    );
};

export default CarsPage;