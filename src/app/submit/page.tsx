import {SearchParams} from "next/dist/server/request/search-params";
import {FC} from "react";

type SubmitPageType = {
    searchParams: Promise<SearchParams>;
}

const SubmitPage: FC<SubmitPageType> = async ({searchParams}) => {
    const sp = await searchParams;
    console.log(sp);

    return (
        <>
            after submitting {sp.username} {sp.password}
        </>
    );
};

export default SubmitPage;