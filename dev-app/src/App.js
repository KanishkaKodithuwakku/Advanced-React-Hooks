import React from "react";
import Spinner from './components/Spinner';
import Alert from './components/Alert'
import useFetchData from "./hooks/useFetchData";
import Badge from "./components/Spinner/Badge";

const App = () => {
  const [loading, error, data] = useFetchData('/users');

  //if (loading) return <Spinner color="primary"/>
  if (error) return <Alert title="Network Error" body={error} color="danger" />
  
  const renderData = data ? data : null;
  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-1">
            {loading ? (
              <Spinner color="danger" />
            ) : (
              <Badge color="primary" shape="rounded-pill">
                {renderData.length}
              </Badge>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
