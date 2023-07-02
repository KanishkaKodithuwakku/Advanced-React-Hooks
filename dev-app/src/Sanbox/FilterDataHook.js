import React from "react";
import useSearchData from "../hooks/useSearchData";
import Spinner from "../components/Spinner/Spinner";
import { Alert } from "bootstrap";

const FilterDataHook = () => { 

    const [loading, error, data] = useSearchData("Rick","Male");
    if (loading) return <Spinner color="danger" />;
    if (error) return <Alert title="Searching Error" body={error} />;

    const renderData = data ? (
      data.map((chr) => <p key={chr.id}>{chr.name}</p>)
    ) : (
      <Alert title="User Not Found" />
    );
    
    return <>{renderData}</>;
}

export default FilterDataHook;
