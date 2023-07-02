import React from "react";
import useSearchData from "../hooks/useSearchData";
import Spinner from "../components/Spinner/Spinner";
import { Alert } from "bootstrap";
import ListItem from "../components/List/ListItem";
import ListBody from "../components/List/ListBody";

const FilterDataHook = () => {
  const [loading, error, data] = useSearchData("Rick", "Male");
  if (loading) return <Spinner color="danger" />;
  if (error) return <Alert title="Searching Error" body={error} />;

  const renderData = data ? (
    data.map((chr) => <ListItem key={chr.id} body={chr.name}></ListItem>)
  ) : (
    <Alert title="User Not Found" />
  );

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <ListBody>
              <ListItem status="active" body="Charactres" />
              {renderData}
            </ListBody>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterDataHook;
