import React, { useState} from "react";
import useSearchData from "../hooks/useSearchData";
import Spinner from "../components/Spinner/Spinner";
import  Alert  from "../components/Alert";
import ListItem from "../components/List/ListItem";
import ListBody from "../components/List/ListBody";
import TextInput from "../components/Inputs/TextInput";
import TextSelect from "../components/Inputs/TextSelect";

const FilterDataHook = () => {

  const [searchText, setSearchText] = useState("");
  const [selectText, setSelectText] = useState("");
  const [loading, error, data] = useSearchData(searchText, selectText);

  const handleSearchInputChange = (text) => {
    
   // console.log(text);
    setSearchText(text);
    //alert(searchText);
  };
  
  const handleSelectInputChange = (text) => {
    //alert(text);
      setSelectText(text);
      //alert(selectText);
  };
  
const options = [
  { id: 1, value: "male", label: "Male" },
  { id: 2, value: "female", label: "Female" },
];


  if (loading) return <Spinner color="danger" />;
  if (error) return "errror"; //<Alert title="Searching Error" body={error} />;

  const renderData = data ? (
    data.map((chr) => <ListItem key={chr.id} body={chr.name}></ListItem>)
  ) : (
    // <Alert title="User Not Found" body="mapping error"/>
      "errror"
  );


  return (
    <>
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-4">
            <TextInput
              handleSearchInputChange={handleSearchInputChange}
              placeholder={`Search By Name`}
              type={`text`}
              label={`Search By Name`}
            />
          </div>

          <div className="col-md-2">
            <TextSelect
              title={`Gender`}
              label={`Gender`}
              handleSelectInputChange={handleSelectInputChange}
              options={options}
            />
          </div>
        </div>

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
